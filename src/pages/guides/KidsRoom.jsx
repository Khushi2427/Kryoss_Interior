import React, { useState } from 'react';
import '../blogs/BlogArticle.css';

const KidsRoom = () => {
  const [activeAge, setActiveAge] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const keyElements = [
    { title: "Safe Furniture", icon: '', desc: "Rounded edges, stable structures, non-toxic materials. Safety first.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
    { title: "Flexible Layout", icon: '', desc: "Adjustable desks and modular units prevent costly renovations as the child grows.", img: "https://images.unsplash.com/photo-1536349788264-1b816db3cc13?w=900&q=80" },
    { title: "Study Zone", icon: '', desc: "A clear study area builds focus. Separate play and study zones for better balance.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80" },
    { title: "Smart Storage", icon: '', desc: "Toy boxes, open shelves, and under-bed drawers keep the room clutter-free.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
    { title: "Balanced Colour", icon: '', desc: "Neutral base with playful accents. Easy-to-update wall elements allow evolution.", img: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?w=900&q=80" }
  ];

  const ageGroups = [
    {
      label: "Toddlers (0-5 yrs)",
      icon: '',
      desc: "Safety and open play space take priority. Everything should be low, padded, and reachable.",
      points: ["Soft flooring or rugs", "Low-height storage", "Open play space", "Rounded edges"],
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
    },
    {
      label: "School-Age (6-12 yrs)",
      icon: '',
      desc: "A dedicated study zone becomes essential. Balance between creativity, organisation, and focus.",
      points: ["Study desk setup", "Book storage & shelves", "Balanced colours", "Activity corner"],
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=900&q=80"
    },
    {
      label: "Teenagers (13-18 yrs)",
      icon: '',
      desc: "Personal expression and independence. Neutral tones let them own the space.",
      points: ["Neutral tones", "Adult furniture", "Personal décor", "Multi-purpose desk"],
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=1800&q=85" alt="Kids Room" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Kids Room<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Spaces that grow with your child - Safe, Flexible, and Thoughtfully Designed.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Kids Room Detail" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Evolution</div>
              <h2 className="blog-section-title">Design that <em style={{ color: 'var(--kr-red)' }}>grows</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Unlike adult spaces, kids' rooms must evolve. We design layouts that can transition
                from a toddler's play area to a teen's study retreat with minimal structural changes.
              </p>
              <div className="blog-checklist">
                {["Support learning", "Maintain safety", "Keep organized", "Adapt easily"].map(item => (
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
          <h2 className="blog-section-title">Design by <em style={{ color: '#fff' }}>Age Group</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ageGroups.map((ag, i) => (
                <button key={i} onClick={() => setActiveAge(i)} style={{
                  padding: '1.5rem', textAlign: 'left',
                  background: activeAge === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeAge === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeAge === i ? '#fff' : '#888',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{ag.icon}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{ag.label}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={ageGroups[activeAge].img} alt={ageGroups[activeAge].label} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{ageGroups[activeAge].label}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1.5rem' }}>{ageGroups[activeAge].desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {ageGroups[activeAge].points.map(pt => (
                    <span key={pt} style={{ color: '#fff', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{pt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Key <em style={{ color: '#fff' }}>Elements</em></h2>
          <div className="blog-feature-grid">
            {keyElements.map((el, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon">{el.icon}</div>
                <h3 className="blog-feature-title">{el.title}</h3>
                <p className="blog-feature-desc">{el.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "What are the best colours for kids?", a: "Neutral bases with changeable accents (cushions, art, rugs) work best long-term. Avoid painting walls in overly stimulating neons." },
              { q: "How to handle toy storage effectively?", a: "Make it accessible. Open bins, low shelves, and labeled drawers encourage kids to tidy up themselves. Rotate toys to keep interest." },
              { q: "Is a fixed theme necessary?", a: "Avoid permanent themes (like cartoon characters on wallpaper). Use temporary decor like bedding and posters which can grow with the child." }
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

export default KidsRoom;