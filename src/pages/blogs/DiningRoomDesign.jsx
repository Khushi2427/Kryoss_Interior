import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import diningRoom from '../../assets/blogs/Dining Room.jpg';

const diningIdeas = [
  { icon: '', title: 'Statement Chandelier', desc: 'A dramatic chandelier above the dining table creates an instant focal point and sets the mood for every meal.', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
  { icon: '', title: 'Mixed Seating', desc: 'Combine upholstered chairs with benches or stools for a relaxed, eclectic dining experience that seats more guests.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { icon: '', title: 'Greenery & Centrepieces', desc: 'Fresh flowers, potted herbs, or sculptural plants as centrepieces bring life and freshness to the dining table.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
  { icon: '', title: 'Natural Light', desc: 'Position the dining area near windows to maximize natural light - it makes food look better and meals feel more pleasant.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' },
  { icon: '', title: 'Accent Walls', desc: 'A bold wallpaper or textured accent wall behind the dining table adds drama and depth to the space.', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
  { icon: '', title: 'Crockery Display', desc: 'Open shelving or glass-front cabinets to display curated crockery, glassware, and decorative pieces.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
];

const faqs = [
  { q: 'What is the ideal dining room size?', a: 'For comfortable dining, allow at least 36 inches of clearance around the table for chairs. A 10x12 ft room comfortably seats 6, while a 12x16 ft room can accommodate 8-10 guests.' },
  { q: 'What dining table shape is best for small spaces?', a: 'Round tables are ideal for small spaces as they allow more people to sit comfortably and improve traffic flow. Extendable tables are also great for flexibility.' },
  { q: 'How do I choose the right dining table height?', a: 'Standard dining tables are 28-30 inches tall. Counter-height tables (34-36 inches) work well with bar stools for a casual, modern look. Ensure chairs are 10-12 inches shorter than the table.' },
  { q: 'What lighting works best over a dining table?', a: 'Pendant lights or chandeliers hung 30-36 inches above the table create the perfect ambiance. Use dimmable lights to transition from bright family dinners to intimate gatherings.' },
];

const DiningRoomDesign = () => {
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
    { id: 'styles', label: 'Dining Styles', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={diningRoom} alt="Dining Room Design" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Dining Room Design Ideas for <em>Memorable Gatherings</em></h1>
            <p className="blog-hero__subtitle">Create a dining space that is as beautiful as the meals shared within it. From intimate dinners to grand celebrations.</p>
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
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>The Dining Room</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Where Every Meal Becomes a Memory</h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  The dining room is where families connect, friends gather, and celebrations happen. A thoughtfully designed dining space elevates every meal from ordinary to extraordinary.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design dining rooms that are elegant, functional, and perfect for every occasion.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">3x</div>
                <p className="blog-intro__stat-label">Families eat together more often in well-designed dining spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80" alt="Elegant Dining Room - Kryoss Interior" />
          <div className="blog-wide-image__caption">Elegant Dining Room Design â€¢ Kryoss Interior</div>
        </div>

        {/* IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Dining Room <em>Design Ideas</em></h2>
          <div className="blog-img-grid">
            {diningIdeas.map((idea, i) => (
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

        {/* SPLIT: FORMAL */}
        <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Formal Dining</div>
              <h2 className="blog-section-title">Formal Dining <em>Room Design</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A formal dining room exudes elegance and sophistication. Perfect for hosting dinner parties and special occasions with a dedicated, beautifully appointed space.
              </p>
              <div className="blog-checklist">
                {['Rectangular table for 8-12 guests', 'Upholstered dining chairs with armrests', 'Statement chandelier as centrepiece', 'Sideboard or buffet for storage & display', 'Wainscoting or wall panelling for elegance'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80" alt="Formal Dining Room" />
            </div>
          </div>

          <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Open-Plan Dining</div>
              <h2 className="blog-section-title">Open-Plan <em>Dining Design</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Open-plan dining seamlessly connects the kitchen, dining, and living areas for a modern, social lifestyle. Perfect for contemporary apartments and family homes.
              </p>
              <div className="blog-checklist">
                {['Island or peninsula to define the dining zone', 'Coordinated colour palette across all areas', 'Pendant lights to anchor the dining table', 'Area rug to visually separate the dining space', 'Bar stools at the kitchen counter for casual dining'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80" alt="Open Plan Dining" />
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
          <h2 className="blog-cta-section__title">Design Your Perfect <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dining Room</em></h2>
          <p className="blog-cta-section__subtitle">Let our experts create a dining space that brings your family together in style and comfort.</p>
          <Link to="/contact-us" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiningRoomDesign;
