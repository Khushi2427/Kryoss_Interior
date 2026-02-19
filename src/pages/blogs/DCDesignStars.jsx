import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import dcDesign from '../../assets/blogs/DC Design.jpg';
const designers = [
  {
    name: 'Priya Sharma',
    role: 'Lead Interior Designer',
    specialty: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    quote: 'Design is not just about aesthetics - it\'s about creating spaces that tell the story of the people who live in them.',
    qualities: ['10+ years experience', 'Luxury residential specialist', 'CIDA certified', 'Award-winning designer'],
    style: 'Luxury Contemporary',
  },
  {
    name: 'Arjun Mehta',
    role: 'Senior Design Consultant',
    specialty: 'Modular & Smart Homes',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    quote: 'The best design is invisible - it works so seamlessly that you only notice how good it feels to be in the space.',
    qualities: ['Smart home integration expert', 'Modular kitchen specialist', 'Space optimization guru', '300+ projects completed'],
    style: 'Modern Minimalist',
  },
  {
    name: 'Kavitha Nair',
    role: 'Creative Director',
    specialty: 'Biophilic & Sustainable Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    quote: 'Sustainable design isn\'t a trend - it\'s a responsibility. Every material choice we make has an impact on the world we live in.',
    qualities: ['Sustainable design pioneer', 'Biophilic design expert', 'Material science background', 'Published author'],
    style: 'Biophilic & Sustainable',
  },
];

const designerQualities = [
  { icon: '', title: 'Creative Vision', desc: 'The ability to see potential in any space and translate a client\'s lifestyle into a cohesive, beautiful design concept.' },
  { icon: '', title: 'Technical Mastery', desc: 'Deep knowledge of materials, construction methods, ergonomics, and building codes ensures designs are both beautiful and buildable.' },
  { icon: '', title: 'Client Communication', desc: 'Understanding what clients truly want - often beyond what they can articulate - and translating it into design decisions.' },
  { icon: '', title: 'Space Planning', desc: 'The science of arranging furniture and elements to optimize flow, function, and visual balance in any space.' },
  { icon: '', title: 'Lighting Expertise', desc: 'Mastery of natural and artificial light - the single most transformative element in any interior design project.' },
  { icon: '', title: 'Project Management', desc: 'Coordinating contractors, suppliers, and timelines to deliver projects on time, within budget, and to the highest standard.' },
];

const faqs = [
  { q: 'What qualifications do Kryoss Interior designers have?', a: 'Our designers hold degrees in Interior Design or Architecture and are certified by recognized bodies like CIDA. They bring an average of 8+ years of hands-on experience across residential and commercial projects.' },
  { q: 'How do I choose the right designer for my project?', a: 'We match you with a designer whose portfolio and specialty aligns with your project type and aesthetic preferences. During the initial consultation, you\'ll meet your assigned designer and can assess the fit.' },
  { q: 'Can I work directly with a senior designer?', a: 'Yes. At Kryoss Interior, every project is led by a senior designer who is your primary point of contact throughout the project. Junior designers support execution under senior supervision.' },
  { q: 'How do designers stay updated with trends?', a: 'Our team regularly attends international design fairs (Milan, Maison & Objet), subscribes to leading design publications, and participates in ongoing professional development programs.' },
];

const DCDesignStars = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const refs = useRef({});
  const reg = (id) => (el) => { if (el) refs.current[id] = el; };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    );
    Object.values(refs.current).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navSections = ['intro', 'team', 'qualities', 'faq', 'cta'];
  const toc = [
    { id: 'team', label: 'Meet the Team', emoji: '' },
    { id: 'qualities', label: 'Designer Qualities', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={dcDesign} alt="Design Stars" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Meet the Creative Minds <em>Behind Kryoss</em></h1>
            <p className="blog-hero__subtitle">The talented designers, visionaries, and craftspeople who transform spaces and bring your dream home to life.</p>
            <button onClick={() => scrollTo('team')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Meet the Team <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      <nav className="blog-nav-dots">
        {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
      </nav>

      <div className="blog-body">
        <div className="blog-toc">
          <div className="blog-toc__title">Table of Contents</div>
          <div className="blog-toc__grid">
            {toc.map(item => <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}><span>{item.emoji}</span>{item.label}</button>)}
          </div>
        </div>

        {/* INTRO */}
        <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-intro">
            <div className="blog-intro-grid">
              <div>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Our People</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Great Design Starts with Great Designers
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Behind every beautiful home is a talented designer who listened, understood, and translated a vision into reality. Our team brings together diverse expertise, creative passion, and technical mastery.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, our designers don't just create beautiful spaces - they create spaces that change how you live.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">50+</div>
                <p className="blog-intro__stat-label">Expert designers and craftspeople on our team</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section ref={reg('team')} data-section="team" id="team" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Stars</div>
          <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Meet Our <em>Design Stars</em></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {designers.map((designer, i) => (
              <div key={i} className="blog-split" style={{ margin: 0 }}>
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <span className="blogs-category-card__tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>{designer.specialty}</span>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: 'var(--kr-slate)', marginBottom: '0.25rem' }}>{designer.name}</h3>
                      <p style={{ color: 'var(--kr-red)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem' }}>{designer.role}</p>
                      <div className="blog-quote" style={{ marginBottom: '1.5rem' }}>
                        <p className="blog-quote__text">"{designer.quote}"</p>
                      </div>
                      <div className="blog-tags">
                        {designer.qualities.map((q, j) => <span key={j} className="blog-tag">{q}</span>)}
                      </div>
                    </div>
                    <div className="blog-image-wrap" style={{ height: '420px' }}>
                      <img src={designer.image} alt={designer.name} style={{ objectPosition: 'top' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="blog-image-wrap" style={{ height: '420px' }}>
                      <img src={designer.image} alt={designer.name} style={{ objectPosition: 'top' }} />
                    </div>
                    <div>
                      <span className="blogs-category-card__tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>{designer.specialty}</span>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: 'var(--kr-slate)', marginBottom: '0.25rem' }}>{designer.name}</h3>
                      <p style={{ color: 'var(--kr-red)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem' }}>{designer.role}</p>
                      <div className="blog-quote" style={{ marginBottom: '1.5rem' }}>
                        <p className="blog-quote__text">"{designer.quote}"</p>
                      </div>
                      <div className="blog-tags">
                        {designer.qualities.map((q, j) => <span key={j} className="blog-tag">{q}</span>)}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* QUALITIES */}
        <section ref={reg('qualities')} data-section="qualities" id="qualities" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>What Makes a Design Star</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>The Qualities of an <em>Exceptional Designer</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {designerQualities.map((q, i) => (
              <div key={i} className="blog-card">
                <div className="blog-card__icon">{q.icon}</div>
                <h3 className="blog-card__title">{q.title}</h3>
                <p className="blog-card__desc">{q.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
          <div className="blog-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                <div className="blog-faq__question">
                  <span className="blog-faq__question-text">{faq.q}</span>
                  <span className="blog-faq__toggle">+</span>
                </div>
                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Work with Our <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Design Stars</em></h2>
          <p className="blog-cta-section__subtitle">Connect with our expert designers and start your journey to a beautifully designed home.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCDesignStars;
