import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import homeInterior from '../../assets/blogs/Home Interior.jpg';

const sections = ['intro', 'ideas', 'trends', 'process', 'benefits', 'faq', 'cta'];

const toc = [
  { id: 'ideas', label: 'Design Ideas', emoji: '' },
  { id: 'trends', label: '2026 Trends', emoji: '' },
  { id: 'process', label: 'Our Process', emoji: '' },
  { id: 'benefits', label: 'Benefits', emoji: '' },
  { id: 'faq', label: 'FAQs', emoji: '' },
];

const designIdeas = [
  { icon: '', title: 'Statement Lighting', desc: 'Chandeliers, pendant clusters, and sculptural lighting instantly elevate a space. Layered lighting across ceiling, walls, and floors adds depth and warmth.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: '', title: 'Neutral Palettes & Accents', desc: 'Beige, grey, and warm whites create a calm base. Add contrast with textured cushions, metallic finishes, or a vibrant accent chair.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { icon: '', title: 'Smart Storage Integration', desc: 'Hidden cabinets, wall-mounted shelves, and multifunctional furniture keep clutter away while maintaining a clean aesthetic.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
  { icon: '', title: 'Open-Concept Layouts', desc: 'Merging dining and living areas creates visual continuity and improves spatial flow - ideal for modern apartments and compact homes.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' },
  { icon: '', title: 'Biophilic Elements', desc: 'Indoor plants, natural textures, and organic materials to improve well-being and connect your home to nature.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
  { icon: '', title: 'Smart Home Integration', desc: 'Automated lighting, hidden tech, and integrated sound systems for a seamless, modern living experience.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80' },
];

const trends = [
  { icon: '', title: 'Minimal Luxe', desc: 'Clean lines with premium textures like marble, brushed gold, and velvet accents.', color: '#c41e3a', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
  { icon: '', title: 'Sustainable Design', desc: 'Eco-friendly materials, recycled wood, energy-efficient lighting, and low-VOC paints.', color: '#16a34a', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
  { icon: '', title: 'Smart Homes', desc: 'Integrated lighting automation, smart curtains, and app-controlled appliances.', color: '#d97706', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80' },
  { icon: '', title: 'Biophilic', desc: 'Indoor plants, natural textures, and organic materials to improve well-being.', color: '#059669', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
];

const processSteps = [
  { num: '01', icon: '', title: 'Consultation & Requirement Analysis', desc: 'Understanding lifestyle, preferences, and budget to craft a tailored design brief.' },
  { num: '02', icon: '', title: 'Concept & 3D Design', desc: 'Photorealistic renders to visualize your dream home before execution begins.' },
  { num: '03', icon: '', title: 'Material Selection', desc: 'Curated options of finishes, fabrics, laminates, and hardware to match your vision.' },
  { num: '04', icon: '', title: 'Factory Precision Manufacturing', desc: 'Modular units produced with accuracy for durability and consistent quality.' },
  { num: '05', icon: '', title: 'Hassle-Free Installation', desc: 'On-site execution managed by experienced professionals with minimal disruption.' },
];

const faqs = [
  { q: 'What is the average cost of home interior design in India?', a: 'Costs vary depending on size, materials, and customization. For a 2BHK, modular interiors typically range from Rs. 3-5 lakhs for basic designs and Rs. 6-10 lakhs for premium finishes.' },
  { q: 'How long does a home interior project take?', a: 'On average, 6-12 weeks depending on scope and complexity. A full home interior includes design finalization (1-2 weeks), material procurement (2-3 weeks), and installation (3-5 weeks).' },
  { q: 'Is modular interior better than traditional carpentry?', a: 'Modular interiors provide precision engineering, faster installation (40% faster), standardized quality, and factory-finished components. They also offer easier maintenance and flexibility to reconfigure in the future.' },
  { q: 'Do you provide warranty on interiors?', a: 'Yes, Kryoss Interior provides comprehensive warranty on modular products - typically 5 years on materials and 1 year on installation. Hardware like channels and hinges come with extended warranties.' },
];

const HomeInteriorDesign = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const refs = useRef({});
  const reg = (id) => (el) => { if (el) refs.current[id] = el; };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
      { threshold: 0.25, rootMargin: '-10% 0px -10% 0px' }
    );
    Object.values(refs.current).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="blog-page">
      {/* HERO */}
      <div className="blog-hero">
        <img src={homeInterior} alt="Home Interior Design" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Home Interior Design Ideas That Redefine <em>Modern Living</em></h1>
            <p className="blog-hero__subtitle">Design Smarter. Live Better. Discover powerful, practical, and trend-forward ideas that transform everyday living into an experience.</p>
            <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Design Ideas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      {/* DOT NAV */}
      <nav className="blog-nav-dots">
        {sections.map(id => (
          <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />
        ))}
      </nav>

      {/* TOC */}
      <div className="blog-body">
        <div className="blog-toc">
          <div className="blog-toc__title">Table of Contents</div>
          <div className="blog-toc__grid">
            {toc.map(item => (
              <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}>
                <span>{item.emoji}</span>{item.label}
              </button>
            ))}
          </div>
        </div>

        {/* INTRO */}
        <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-intro">
            <div className="blog-intro-grid">
              <div>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ background: 'rgba(255,255,255,0.6)', display: 'block', width: '20px', height: '1.5px' }}></span>
                  Why It Matters
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Why Modern Home Interiors Matter Today
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Your home should not just look beautiful - it should work beautifully. From space-saving layouts to mood-enhancing lighting, modern interior design is about creating homes that adapt to your lifestyle.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, every home is designed with a balance of aesthetics, practicality, and long-term value.
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">78%</div>
                <p className="blog-intro__stat-label">of people say home design affects their productivity and mood</p>
                <div style={{ marginTop: '2rem' }}>
                  <div className="blog-intro__stat" style={{ fontSize: '3.5rem' }}>10+</div>
                  <p className="blog-intro__stat-label">Years of excellence in interior design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80" alt="Modern Living Room - Kryoss Interior" />
          <div className="blog-wide-image__caption">Modern Living Room Design â€¢ Kryoss Interior</div>
        </div>

        {/* DESIGN IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
          <h2 className="blog-section-title">Home Interior <em>Design Ideas</em></h2>
          <p className="blog-section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Curated ideas that balance personality, comfort, and functionality for every home.
          </p>
          <div className="blog-img-grid">
            {designIdeas.map((idea, i) => (
              <div key={i} className="blog-img-card">
                <img src={idea.image} alt={idea.title} className="blog-img-card__image" />
                <div className="blog-img-card__body">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{idea.icon}</div>
                  <h3 className="blog-img-card__title">{idea.title}</h3>
                  <p className="blog-img-card__desc">{idea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPLIT: BEDROOM */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Bedroom</div>
              <h2 className="blog-section-title">Bedroom Interior <em>Inspirations</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A well-designed bedroom is your personal sanctuary. Every element - from lighting to storage - should contribute to rest and rejuvenation.
              </p>
              <div className="blog-checklist">
                {['Layered lighting with warm bedside lamps', 'Sliding wardrobes with glossy or matte finishes', 'Upholstered headboards for luxury and comfort', 'Hydraulic storage beds for compact spaces'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '460px' }}>
              <img src="https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=900&q=80" alt="Bedroom Design" />
            </div>
          </div>
        </section>

        {/* SPLIT: KITCHEN */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="blog-split blog-split--reverse">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Kitchen</div>
              <h2 className="blog-section-title">Modular Kitchen <em>Interior Ideas</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The kitchen is the heart of your home. Smart layouts, durable finishes, and intelligent storage make it both beautiful and functional.
              </p>
              <div className="blog-checklist">
                {['Handleless cabinets for minimalistic elegance', 'Smart layout planning (L, U, island shapes)', 'Pull-out pantries and corner carousel units', 'Quartz countertops and anti-scratch laminates'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '460px' }}>
              <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=900&q=80" alt="Modular Kitchen" />
            </div>
          </div>
        </section>

        {/* TRENDS */}
        <section ref={reg('trends')} data-section="trends" id="trends" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>2026 Trends</div>
            <h2 className="blog-section-title">Trending Interior Design <em>Styles</em></h2>
          </div>
          <div className="blog-img-grid blog-img-grid--2" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {trends.map((t, i) => (
              <div key={i} className="blog-img-card">
                <img src={t.image} alt={t.title} className="blog-img-card__image" style={{ height: '260px' }} />
                <div className="blog-img-card__body">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.icon}</div>
                  <h3 className="blog-img-card__title">{t.title}</h3>
                  <p className="blog-img-card__desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section ref={reg('process')} data-section="process" id="process" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-process">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>How We Work</div>
              <h2 className="blog-section-title">Our Professional <em>Design Process</em></h2>
              <p className="blog-section-subtitle" style={{ margin: '0 auto' }}>A structured approach that ensures clarity, quality, and timely delivery.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
              {processSteps.map((step, i) => (
                <div key={i} className="blog-process__step">
                  <div className="blog-process__num">{step.num}</div>
                  <div>
                    <div className="blog-process__content-title">{step.icon} {step.title}</div>
                    <div className="blog-process__content-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section ref={reg('benefits')} data-section="benefits" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-dark-section">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                Benefits of Choosing <em style={{ color: '#c9a96e' }}>Expert Designers</em>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', position: 'relative', zIndex: 2 }}>
              {['Optimized space utilization', 'Budget control with cost transparency', 'Professional project management', 'Access to premium materials', 'Time-bound delivery', 'Quality assurance & warranty'].map((b, i) => (
                <div key={i} className="blog-benefit">
                  <span className="blog-benefit__check">âœ¦</span>
                  <span className="blog-benefit__text">{b}</span>
                </div>
              ))}
            </div>
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

        {/* CTA */}
        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Ready to Design Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dream Home?</em></h2>
          <p className="blog-cta-section__subtitle">Let's build a space that truly reflects you. Get a consultation today.</p>
          <Link to="/contact-us" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeInteriorDesign;
