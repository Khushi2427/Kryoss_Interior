import React, { useState } from 'react';
import '../blogs/BlogArticle.css';

const Balcony = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const keyElements = [
    {
      number: "01",
      title: "Flooring Options",
      icon: '',
      desc: "Weather-resistant flooring like WPC decking tiles, artificial grass, or outdoor-grade ceramic tiles set the foundation.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      tags: ["Decking", "Turf", "Tiles"]
    },
    {
      number: "02",
      title: "Comfortable Seating",
      icon: '',
      desc: "Choose weather-proof furniture like rattan, metal, or treated wood. Foldable options work great for compact spaces.",
      img: "https://images.unsplash.com/photo-1595514020173-66b6e3a6a95e?w=900&q=80", // Needs balcony seating generic
      tags: ["Rattan", "Foldable", "Weatherproof"]
    },
    {
      number: "03",
      title: "Greenery & Planters",
      icon: '',
      desc: "Vertical gardens, railing planters, and potted plants bring life. Choose plants suited for your sunlight conditions.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80", // Placeholder
      tags: ["Vertical Garden", "Pots", "Low Maintenance"]
    },
    {
      number: "04",
      title: "Ambient Lighting",
      icon: '',
      desc: "Fairy lights, solar lanterns, or wall sconces create a magical evening atmosphere without needing complex wiring.",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80",
      tags: ["Fairy Lights", "Solar", "Warm White"]
    },
    {
      number: "05",
      title: "Privacy Solutions",
      icon: '',
      desc: "Bamboo screens, tall plants, or outdoor blinds can provide privacy from neighbors while maintaining airflow.",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80",
      tags: ["Screens", "Blinds", "Plants"]
    }
  ];

  const tips = [
    { tip: "Vertical Gardening", detail: "Save floor space by using walls for plants.", icon: '' },
    { tip: "Foldable Tables", detail: "Rail-mounted tables are perfect for morning coffee.", icon: '' },
    { tip: "Multi-use Storage", detail: "Bench seating with hidden storage for cushions.", icon: '' },
    { tip: "Rug Layering", detail: "Outdoor rugs define the seating area and add warmth.", icon: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85" alt="Cozy Balcony" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Balcony<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Transform your outdoor space into a personal retreat - Relaxing, Green, Private.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80" alt="Balcony Setup" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Outdoor Living</div>
              <h2 className="blog-section-title">Extend your <em style={{ color: 'var(--kr-red)' }}>living space</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Even a small balcony can become a sanctuary. With smart layout planning and right material choices,
                you can create a durable and inviting outdoor area.
              </p>
              <blockquote style={{ borderLeft: '3px solid var(--kr-red)', paddingLeft: '1.5rem', color: '#fff', fontStyle: 'italic', fontSize: '1.1rem' }}>
                "Your balcony is your connection to the outdoors - make it count."
              </blockquote>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Core Principles</div>
          <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Elements of a <em style={{ color: '#fff' }}>Dream Balcony</em></h2>

          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {keyElements.map((el, i) => (
                <button
                  key={i}
                  onClick={() => setActiveElement(i)}
                  style={{
                    padding: '1.5rem',
                    textAlign: 'left',
                    background: activeElement === i ? '#1a1a1a' : 'transparent',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderLeft: activeElement === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                    color: activeElement === i ? '#fff' : '#888',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.7, marginBottom: '0.25rem' }}>{el.number}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{el.title}</div>
                </button>
              ))}
            </div>

            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={keyElements[activeElement].img} alt={keyElements[activeElement].title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{keyElements[activeElement].icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{keyElements[activeElement].title}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1.5rem' }}>{keyElements[activeElement].desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {keyElements[activeElement].tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '100px', textTransform: 'uppercase' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Compact <em style={{ color: '#fff' }}>Ideas</em></h2>
          <div className="blog-feature-grid">
            {tips.map((tip, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon">{tip.icon}</div>
                <h3 className="blog-feature-title">{tip.tip}</h3>
                <p className="blog-feature-desc">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "Can I install natural grass on my balcony?", a: "Natural grass requires significant soil depth and heavy waterproofing. Artificial turf is a lighter, safer, and low-maintenance alternative." },
              { q: "Is outdoor furniture purely waterproof?", a: "Most outdoor furniture is water-resistant, not fully waterproof. It's best to cover them during heavy monsoon rains to prolong their life." },
              { q: "What is the best way to add privacy from neighbors?", a: "Use tall potted plants like bamboo or palms as natural screens, or install roll-down outdoor blinds for adjustable privacy." }
            ].map((item, i) => (
              <div
                key={i}
                className={`blog-faq__item ${activeFaq === i ? 'open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="blog-faq__question">
                  <span className="blog-faq__question-text">{item.q}</span>
                  <div className="blog-faq__toggle">+</div>
                </div>
                <div
                  className="blog-faq__answer"
                  style={{ display: activeFaq === i ? 'block' : 'none' }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Balcony;