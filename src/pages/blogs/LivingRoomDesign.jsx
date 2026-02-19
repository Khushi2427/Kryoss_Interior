import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import livingRoom from '../../assets/blogs/Living Room.jpg';
const faqs = [
  { q: 'What is the ideal living room size for modern design?', a: 'Smart layout planning can transform even compact spaces into functional and stylish living areas. The key is optimizing furniture placement, using vertical space, and selecting multi-functional pieces.' },
  { q: 'How long does a living room interior project take?', a: 'Projects typically range from 4-8 weeks. This includes design finalization (1-2 weeks), material procurement (2 weeks), and installation (2-3 weeks).' },
  { q: 'What is the cost of living room interior design?', a: 'A basic living room design starts from Rs. 1.5 lakhs, while premium designs with custom furniture and advanced features range from Rs. 3-6 lakhs.' },
  { q: 'Can you design a living room with existing furniture?', a: 'Absolutely! We specialize in blending existing pieces with new design elements to create a cohesive look that respects your preferences while elevating the overall aesthetic.' },
];

const designStyles = [
  { num: '01', title: 'Modern Minimalist', desc: 'Clean lines, neutral palettes, and zero clutter. Intentional styling with concealed storage and layered lighting.', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80' },
  { num: '02', title: 'Luxury Contemporary', desc: 'Statement wall panels, metallic accents, premium upholstery, and custom TV consoles with ambient lighting.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80' },
  { num: '03', title: 'Smart Storage Design', desc: 'Floating shelves, built-in wall cabinets, hidden drawers in seating, and modular TV units.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=700&q=80' },
  { num: '04', title: 'Open Concept Layout', desc: 'Seamless flow between living, dining, and kitchen areas using rugs, ceiling designs, and coordinated palettes.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80' },
];

const colorTrends = [
  { name: 'Earthy Browns', color: '#78350f', desc: 'Warm, grounding, timeless' },
  { name: 'Olive Green', color: '#3f6212', desc: 'Natural, calming, versatile' },
  { name: 'Terracotta', color: '#c2410c', desc: 'Vibrant, earthy, welcoming' },
  { name: 'Warm Beige', color: '#d6d3d1', textDark: true, desc: 'Neutral, elegant, adaptable' },
  { name: 'Muted Blues', color: '#3b82f6', desc: 'Serene, sophisticated, cool' },
  { name: 'Sage Green', color: '#6b8f71', desc: 'Fresh, organic, peaceful' },
];

const featureWallOptions = ['Fluted wooden panels', 'Textured wallpapers', 'Backlit TV panels', '3D wall cladding', 'Stone veneer', 'Brick effect'];

const LivingRoomDesign = () => {
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

  const navSections = ['intro', 'styles', 'featureWall', 'colors', 'faq', 'cta'];
  const toc = [
    { id: 'styles', label: 'Design Styles', emoji: '' },
    { id: 'featureWall', label: 'Feature Wall', emoji: '' },
    { id: 'colors', label: 'Color Trends', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      {/* HERO */}
      <div className="blog-hero">
        <img src={livingRoom} alt="Living Room Design" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Living Room Design Ideas That Redefine <em>Modern Living</em></h1>
            <p className="blog-hero__subtitle">Smart. Stylish. Seamlessly Yours. Discover design ideas that balance personality, comfort, and functionality.</p>
            <button onClick={() => scrollTo('styles')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Designs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      {/* DOT NAV */}
      <nav className="blog-nav-dots">
        {navSections.map(id => (
          <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />
        ))}
      </nav>

      <div className="blog-body">
        {/* TOC */}
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
                  The Living Room
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Your Living Room Sets the Tone for Your Entire Home
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  The living room is the heart of your home - where family gathers, guests are entertained, and memories are made. A well-designed living room balances aesthetics, comfort, and functionality.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design living rooms that are as functional as they are beautiful - spaces that truly feel like home.
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">4</div>
                <p className="blog-intro__stat-label">Signature design styles for every taste and budget</p>
                <div style={{ marginTop: '2rem' }}>
                  <div className="blog-intro__stat" style={{ fontSize: '3.5rem' }}>500+</div>
                  <p className="blog-intro__stat-label">Living rooms designed across India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80" alt="Premium Living Room - Kryoss Interior" />
          <div className="blog-wide-image__caption">Luxury Contemporary Living Room â€¢ Kryoss Interior</div>
        </div>

        {/* DESIGN STYLES */}
        <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Styles</div>
          <h2 className="blog-section-title">Living Room <em>Design Styles</em></h2>
          <p className="blog-section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Four distinct design approaches to transform your living room into a space that reflects your personality.
          </p>
          <div className="blog-img-grid blog-img-grid--2" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {designStyles.map((style, i) => (
              <div key={i} className="blog-img-card">
                <img src={style.image} alt={style.title} className="blog-img-card__image" style={{ height: '240px' }} />
                <div className="blog-img-card__body">
                  <div className="blog-img-card__num">{style.num}</div>
                  <h3 className="blog-img-card__title">{style.title}</h3>
                  <p className="blog-img-card__desc">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE WALL */}
        <section ref={reg('featureWall')} data-section="featureWall" id="featureWall" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Feature Walls</div>
              <h2 className="blog-section-title">Create a Stunning <em>Feature Wall</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A feature wall is the single most impactful design element in a living room. It creates a focal point, adds depth, and defines the room's character.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {featureWallOptions.map((opt, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80" alt="Feature Wall Design" />
            </div>
          </div>
        </section>

        {/* COLOR TRENDS */}
        <section ref={reg('colors')} data-section="colors" id="colors" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Color Trends</div>
            <h2 className="blog-section-title">2026 Living Room <em>Color Palette</em></h2>
            <p className="blog-section-subtitle" style={{ margin: '0 auto' }}>The colours defining modern living rooms this year.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {colorTrends.map((c, i) => (
              <div key={i} style={{
                borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--kr-shadow)',
                transition: 'var(--kr-transition)', cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--kr-shadow-lg)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--kr-shadow)'; }}>
                <div style={{ background: c.color, height: '120px' }} />
                <div style={{ padding: '1rem', background: '#fff', borderTop: '1px solid var(--kr-border)' }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--kr-slate)', marginBottom: '0.25rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--kr-slate-4)' }}>{c.desc}</div>
                </div>
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

        {/* CTA */}
        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Design Your Perfect <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Living Room</em></h2>
          <p className="blog-cta-section__subtitle">Let our experts create a living room that is the heart of your home - beautiful, functional, and uniquely yours.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LivingRoomDesign;
