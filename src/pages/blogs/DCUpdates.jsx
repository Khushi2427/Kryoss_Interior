import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import dcUpdates from '../../assets/blogs/DC Updates.jpg';
const updates = [
  {
    date: 'January 2026',
    tag: 'Launch',
    title: 'Kryoss Interior Launches Premium Design Studio in Bangalore',
    desc: 'We are thrilled to announce the opening of our flagship design studio in Koramangala, Bangalore - a 3,000 sq ft space showcasing our full range of modular furniture, material samples, and design concepts.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    date: 'December 2025',
    tag: 'Award',
    title: 'Kryoss Interior Wins Best Interior Design Firm - South India 2025',
    desc: 'We are honoured to have been recognized as the Best Interior Design Firm in South India at the prestigious Design Excellence Awards 2025, celebrating our commitment to quality and innovation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
  },
  {
    date: 'November 2025',
    tag: 'Expansion',
    title: 'Expanding to Hyderabad - New Design Centre Opening',
    desc: 'Kryoss Interior is expanding its footprint to Hyderabad with a new design centre in Jubilee Hills. The centre will serve the growing demand for premium interior design services in the city.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
  },
  {
    date: 'October 2025',
    tag: 'Partnership',
    title: 'Strategic Partnership with Leading European Furniture Brands',
    desc: 'We have partnered with three leading European furniture manufacturers to bring exclusive, premium furniture collections to our clients - offering access to designs not previously available in India.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
  },
];

const DCUpdates = () => {
  const [activeSection, setActiveSection] = useState('intro');
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

  const navSections = ['intro', 'updates', 'cta'];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={dcUpdates} alt="DC Updates" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Latest News & Updates from <em>Kryoss Interior</em></h1>
            <p className="blog-hero__subtitle">Stay informed about our latest launches, awards, expansions, and partnerships - the story of Kryoss Interior continues to grow.</p>
            <button onClick={() => scrollTo('updates')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Read Updates <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      <nav className="blog-nav-dots">
        {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
      </nav>

      <div className="blog-body">
        <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-intro">
            <div className="blog-intro-grid">
              <div>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Company News</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Kryoss Interior - Growing Stronger Every Year
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  From our humble beginnings to becoming one of India's most trusted interior design firms, our journey is one of passion, craftsmanship, and an unwavering commitment to our clients.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>Every milestone we achieve is a reflection of the trust our clients place in <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>. We are grateful for every home we've had the privilege to design.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">10+</div>
                <p className="blog-intro__stat-label">Years of design excellence across India</p>
              </div>
            </div>
          </div>
        </section>

        <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
          {[{ number: '500+', label: 'Homes Designed' }, { number: '15+', label: 'Cities Served' }, { number: '50+', label: 'Team Members' }, { number: '10+', label: 'Industry Awards' }].map((stat, i) => (
            <div key={i} className="blog-stat">
              <div className="blog-stat__number">{stat.number}</div>
              <div className="blog-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>

        <section ref={reg('updates')} data-section="updates" id="updates" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Latest Updates</div>
          <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Company <em>News & Updates</em></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {updates.map((update, i) => (
              <div key={i} className="blog-split" style={{ margin: 0 }}>
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="blogs-category-card__tag">{update.tag}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--kr-slate-4)', fontWeight: 500 }}>{update.date}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--kr-slate)', marginBottom: '1rem', lineHeight: 1.3 }}>{update.title}</h3>
                      <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8 }}>{update.desc}</p>
                    </div>
                    <div className="blog-image-wrap" style={{ height: '380px' }}><img src={update.image} alt={update.title} /></div>
                  </>
                ) : (
                  <>
                    <div className="blog-image-wrap" style={{ height: '380px' }}><img src={update.image} alt={update.title} /></div>
                    <div>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="blogs-category-card__tag">{update.tag}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--kr-slate-4)', fontWeight: 500 }}>{update.date}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--kr-slate)', marginBottom: '1rem', lineHeight: 1.3 }}>{update.title}</h3>
                      <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8 }}>{update.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Be Part of the <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Kryoss Story</em></h2>
          <p className="blog-cta-section__subtitle">Join hundreds of homeowners who have trusted Kryoss Interior to design their dream home.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCUpdates;
