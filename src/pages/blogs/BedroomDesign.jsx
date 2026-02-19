import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import bedroom from '../../assets/blogs/Bedroom Design.jpg';

const bedroomIdeas = [
  { icon: '', title: 'Layered Lighting', desc: 'Warm bedside lamps combined with indirect ceiling lights create a relaxing, spa-like ambiance perfect for rest.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: '', title: 'Sliding Wardrobes', desc: 'Glossy or matte-finish wardrobes with sliding shutters save space while adding a sleek, modern aesthetic.', image: 'https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=600&q=80' },
  { icon: '', title: 'Upholstered Headboards', desc: 'Textured or padded headboards bring luxury and comfort to contemporary bedrooms, creating a focal point.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
  { icon: '', title: 'Hidden Storage Beds', desc: 'Hydraulic storage beds are perfect for maximizing compact spaces without compromising on style.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { icon: '', title: 'Accent Walls', desc: 'Bold wallpapers, textured panels, or a single painted accent wall adds depth and character to the bedroom.', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
  { icon: '', title: 'Biophilic Touches', desc: 'Indoor plants, natural wood textures, and organic materials bring calm and well-being to your sleep space.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
];

const faqs = [
  { q: 'What is the ideal bedroom interior design style for 2026?', a: 'Warm minimalism, biophilic design, and luxury contemporary styles are trending. The focus is on comfort, calm colour palettes, and smart storage solutions that keep the space clutter-free.' },
  { q: 'How can I maximize storage in a small bedroom?', a: 'Use hydraulic storage beds, built-in wardrobes with floor-to-ceiling panels, wall-mounted shelves, and under-bed drawers. Vertical storage is key in compact spaces.' },
  { q: 'What are the best colours for a bedroom?', a: 'Soft neutrals like warm whites, beiges, and muted greys promote relaxation. Earthy tones like terracotta and sage green add warmth. Avoid overly bright or stimulating colours in the bedroom.' },
  { q: 'How long does a bedroom interior project take?', a: 'A typical bedroom interior project takes 4-6 weeks, including design finalization, material procurement, and installation. Custom wardrobes and furniture may add 1-2 weeks.' },
];

const BedroomDesign = () => {
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

  const navSections = ['intro', 'ideas', 'styles', 'faq', 'cta'];
  const toc = [
    { id: 'ideas', label: 'Design Ideas', emoji: '' },
    { id: 'styles', label: 'Design Styles', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={bedroom} alt="Bedroom Design" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Bedroom Design Ideas for a <em>Restful Sanctuary</em></h1>
            <p className="blog-hero__subtitle">Create a personal haven that balances luxury, comfort, and smart storage for the ultimate sleep experience.</p>
            <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Ideas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Why It Matters</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Your Bedroom is Your Sanctuary</h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  A well-designed bedroom improves sleep quality, reduces stress, and creates a personal retreat from the world. Every design decision - from lighting to storage - should serve your comfort and well-being.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design bedrooms that are not just beautiful - they are deeply personal and purposefully functional.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">8hrs</div>
                <p className="blog-intro__stat-label">Average time spent in the bedroom daily - make it count</p>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80" alt="Master Bedroom - Kryoss Interior" />
          <div className="blog-wide-image__caption">Luxury Master Bedroom Design â€¢ Kryoss Interior</div>
        </div>

        {/* IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Bedroom Design <em>Ideas & Elements</em></h2>
          <div className="blog-img-grid">
            {bedroomIdeas.map((idea, i) => (
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

        {/* SPLIT: MASTER BEDROOM */}
        <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Master Bedroom</div>
              <h2 className="blog-section-title">Luxury Master <em>Bedroom Design</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A luxury master bedroom is about creating a hotel-like experience at home. Rich textures, curated lighting, and bespoke storage come together for a truly premium feel.
              </p>
              <div className="blog-checklist">
                {['King-size platform bed with upholstered headboard', 'Walk-in wardrobe with island dresser', 'En-suite bathroom with premium fixtures', 'Automated curtains and mood lighting', 'Statement ceiling with cove lighting'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80" alt="Master Bedroom" />
            </div>
          </div>

          <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Compact Bedroom</div>
              <h2 className="blog-section-title">Smart Design for <em>Small Bedrooms</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Small bedrooms can feel spacious and luxurious with the right design strategies. Light palettes, vertical storage, and multi-functional furniture are key.
              </p>
              <div className="blog-checklist">
                {['Light colour palettes to visually expand space', 'Floor-to-ceiling wardrobes for maximum storage', 'Hydraulic storage bed with under-bed drawers', 'Wall-mounted study unit to save floor space', 'Mirrors to create depth and reflect light'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" alt="Small Bedroom Design" />
            </div>
          </div>
        </section>

        {/* DARK SECTION */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="blog-dark-section">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                Bedroom Design <em style={{ color: '#c9a96e' }}>Essentials</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>The key elements that define a premium bedroom interior</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', position: 'relative', zIndex: 2 }}>
              {['Premium mattress & bed frame', 'Custom wardrobe with internal fittings', 'Layered lighting design', 'Acoustic wall panels for privacy', 'Smart home integration', 'Quality window treatments'].map((b, i) => (
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
          <h2 className="blog-cta-section__title">Design Your Perfect <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Bedroom</em></h2>
          <p className="blog-cta-section__subtitle">Let our experts create a bedroom that is your personal sanctuary - beautiful, functional, and uniquely yours.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BedroomDesign;
