import React, { useState } from 'react';
import '../blogs/BlogArticle.css';

const DiningRoom = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const keyElements = [
    { title: "The Table", icon: '', desc: "Rectangular for large rooms, round for compact spaces. Allow 3ft clearance all around.", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80" },
    { title: "Comfortable Seating", icon: '', desc: "Upholstered chairs encourage lingering. Ensure adequate back support.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
    { title: "Statement Lighting", icon: '', desc: "A low-hanging pendant or chandelier anchors the dining zone.", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80" },
    { title: "Storage", icon: '', desc: "Crockery units and sideboards keep tableware accessible and display-worthy.", img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=900&q=80" },
    { title: "Ambience", icon: '', desc: "Warm colours and texture (wood, linen) create an inviting atmosphere.", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80" }
  ];

  const smallRoomTips = [
    { tip: "Round Tables", detail: "No corners mean more flow and flexibility.", icon: '' },
    { tip: "Bench Seating", detail: "Tucks under the table or sits against a wall to save space.", icon: '' },
    { tip: "Mirrors", detail: "Reflect light and make the dining nook feel larger.", icon: '' },
    { tip: "Vertical Storage", detail: "Tall, slim cabinets instead of wide sideboards.", icon: '' }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1800&q=85" alt="Elegant Dining" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Dining Room<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Create a space for connection - Warm, Practical, Thoughtfully Planned.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=900&q=80" alt="Family Dining" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Gathering Place</div>
              <h2 className="blog-section-title">Where life happens <em style={{ color: 'var(--kr-red)' }}>together</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Dining spaces are used daily and should feel relaxed rather than formal.
                A well-designed dining room encourages people to sit, eat, and stay longer.
              </p>
              <div className="blog-checklist">
                {["Comfort first", "Easy movement", "Warm atmosphere", "Daily joy"].map(item => (
                  <div key={item} className="blog-checklist__item">
                    <div className="blog-checklist__icon"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Core <em style={{ color: '#fff' }}>Elements</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {keyElements.map((el, i) => (
                <button key={i} onClick={() => setActiveElement(i)} style={{
                  padding: '1.5rem', textAlign: 'left',
                  background: activeElement === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeElement === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeElement === i ? '#fff' : '#888',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{el.title}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={keyElements[activeElement].img} alt={keyElements[activeElement].title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{keyElements[activeElement].icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{keyElements[activeElement].title}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7 }}>{keyElements[activeElement].desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Small Space <em style={{ color: '#fff' }}>Solutions</em></h2>
          <div className="blog-feature-grid">
            {smallRoomTips.map((t, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon">{t.icon}</div>
                <h3 className="blog-feature-title">{t.tip}</h3>
                <p className="blog-feature-desc">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "What is the ideal table size for 4 people?", a: "A 36-40 inch square or round table is standard for comfortable dining. For rectangular tables, aim for 48 inches long." },
              { q: "At what height should I hang a dining light?", a: "Pendants or chandeliers should hang 30-34 inches above the table surface to provide intimacy without obstructing views." },
              { q: "How do I choose the right rug size?", a: "The rug should extend at least 24 inches beyond the table on all sides. This ensures chairs remain on the rug even when pulled out." }
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

export default DiningRoom;