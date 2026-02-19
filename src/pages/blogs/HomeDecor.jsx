import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import homeDecor from '../../assets/blogs/Home Decor.jpg';
const decorIdeas = [
  { icon: '', title: 'Gallery Walls', desc: 'Curated collections of art, photos, and prints arranged in a cohesive grid or salon-style display.', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80' },
  { icon: '', title: 'Indoor Plants', desc: 'From fiddle-leaf figs to trailing pothos, plants add life, colour, and improved air quality to any room.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
  { icon: '', title: 'Statement Mirrors', desc: 'Oversized or uniquely framed mirrors reflect light, create depth, and serve as striking decorative focal points.', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
  { icon: '', title: 'Textured Rugs', desc: 'A well-chosen rug anchors a seating area, adds warmth underfoot, and introduces colour and pattern to the room.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { icon: '', title: 'Candles & Scent', desc: 'Scented candles and diffusers create ambiance and engage the senses for a truly immersive home experience.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: '', title: 'Decorative Vases', desc: 'Sculptural vases in ceramic, glass, or metal add artistic interest and can be styled with fresh or dried flowers.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' },
  { icon: '', title: 'Accent Lighting', desc: 'Table lamps, floor lamps, and LED strips create warm pools of light that add depth and drama to any space.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: '', title: 'Throw Pillows & Blankets', desc: 'Layering cushions and throws in complementary textures and colours instantly elevates sofas and beds.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { icon: '', title: 'Shelf Styling', desc: 'Thoughtfully arranged books, plants, and objects on shelves create visual interest and reflect your personality.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
];

const faqs = [
  { q: 'How do I choose the right art for my home?', a: 'Choose art that resonates with you personally. Consider the scale - large pieces work well as focal points, while smaller pieces can be grouped in a gallery wall. Match the mood of the art to the room\'s function.' },
  { q: 'How many plants should I have in a room?', a: 'There is no set number, but a good rule of thumb is one large plant or 2-3 smaller plants per 100 sq ft. Choose plants suited to the light conditions of each room.' },
  { q: 'How do I style a bookshelf?', a: 'Mix books (horizontal and vertical), plants, decorative objects, and framed photos. Use the rule of three - group items in odd numbers. Leave some empty space to avoid a cluttered look.' },
  { q: 'What is the best way to add colour to a neutral room?', a: 'Add colour through accessories - cushions, throws, rugs, vases, and art. This allows you to change the colour scheme easily without repainting. Start with one accent colour and build from there.' },
];

const HomeDecor = () => {
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

  const navSections = ['intro', 'ideas', 'tips', 'faq', 'cta'];
  const toc = [
    { id: 'ideas', label: 'Decor Ideas', emoji: '' },
    { id: 'tips', label: 'Styling Tips', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={homeDecor} alt="Home Decor" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Home Decor Ideas That <em>Elevate Every Space</em></h1>
            <p className="blog-hero__subtitle">The finishing touches that transform a house into a home - curated decor ideas for every room and every style.</p>
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
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Home Decor</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Art of Making a House Feel Like Home</h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Home decor is the art of personalizing your space - adding layers of texture, colour, and meaning that reflect who you are. The right accessories can transform even the most basic room into something truly special.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we believe that great decor tells a story - your story.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">9</div>
                <p className="blog-intro__stat-label">Essential decor categories to transform any space</p>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" alt="Beautiful Home Decor - Kryoss Interior" />
          <div className="blog-wide-image__caption">Curated Home Decor Styling â€¢ Kryoss Interior</div>
        </div>

        {/* DECOR IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Decor Ideas</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Home Decor <em>Ideas & Inspiration</em></h2>
          <div className="blog-img-grid blog-img-grid--3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {decorIdeas.map((idea, i) => (
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

        {/* SPLIT: STYLING TIPS */}
        <section ref={reg('tips')} data-section="tips" id="tips" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Pro Styling Tips</div>
              <h2 className="blog-section-title">Professional <em>Styling Secrets</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Interior stylists use these tried-and-tested techniques to create spaces that look effortlessly beautiful and feel deeply personal.
              </p>
              <div className="blog-checklist">
                {['Layer textures - mix smooth, rough, soft, and hard', 'Use the rule of odd numbers for groupings', 'Vary heights to create visual interest', 'Add one unexpected element to every room', 'Edit ruthlessly - less is almost always more', 'Mix old and new for a collected, curated look'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80" alt="Interior Styling" />
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
          <h2 className="blog-cta-section__title">Style Your Home with <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Expert Guidance</em></h2>
          <p className="blog-cta-section__subtitle">Let our interior stylists help you create a home that is beautiful, personal, and uniquely yours.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDecor;
