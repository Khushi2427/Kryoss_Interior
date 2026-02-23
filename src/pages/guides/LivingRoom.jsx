import React, { useState } from 'react';
import '../blogs/BlogArticle.css';

const LivingRoom = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const elements = [
    { title: "Smart Layout", icon: '', desc: "Arrange seating to encourage conversation. Maintain clear pathways (min 30 inches) and avoid blocking natural light.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
    { title: "Comfortable Seating", icon: '', desc: "Prioritize comfort. Mix sofa sizes with accent chairs for flexibility. Ensure fabrics are durable.", img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=80" },
    { title: "Lighting Strategy", icon: '', desc: "Layer your lighting: Overhead for general use, floor lamps for reading, and accent lights for art or texture.", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80" },
    { title: "Storage & TV", icon: '', desc: "TV units with closed storage hide clutter. Floating units save floor space and look modern.", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80" },
    { title: "Texture Balance", icon: '', desc: "Mix materials like wood, metal, glass, and fabric to add depth. Use rugs to define zones.", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80" }
  ];

  const mistakes = [
    { title: "Oversized Furniture", desc: "Blocks flow and makes room feel small.", fix: "Measure first" },
    { title: "Poor Lighting", desc: "Single overhead light kills mood.", fix: "Layer light" },
    { title: "No Focal Point", desc: "Eye wanders without anchor.", fix: "Feature wall/TV" },
    { title: "Ignoring Storage", desc: "Clutter builds up fast.", fix: "Plan cabinets" }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1800&q=85" alt="Modern Living Room" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Living Room<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Create a space that feels like home - Comfortable, Functional, and Welcoming.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80" alt="Living Room Seat" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Social Hub</div>
              <h2 className="blog-section-title">Where <em style={{ color: 'var(--kr-red)' }}>real life</em> happens.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                The most-used room in any home deserves thoughtful planning.
                A well-designed living room improves movement flow, reduces clutter, and creates a strong first impression.
              </p>
              <div className="blog-checklist">
                {["Conversation zones", "Clear pathways", "Balanced spacing"].map(item => (
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
          <h2 className="blog-section-title">Key <em style={{ color: '#fff' }}>Elements</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {elements.map((el, i) => (
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
              <img src={elements[activeElement].img} alt={elements[activeElement].title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{elements[activeElement].icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{elements[activeElement].title}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7 }}>{elements[activeElement].desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Avoid These <em style={{ color: '#fff' }}>Mistakes</em></h2>
          <div className="blog-feature-grid">
            {mistakes.map((m, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon" style={{ borderColor: 'var(--kr-red)', color: 'var(--kr-red)' }}></div>
                <h3 className="blog-feature-title">{m.title}</h3>
                <p className="blog-feature-desc" style={{ marginBottom: '1rem' }}>{m.desc}</p>
                <div style={{ color: 'var(--kr-red)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  Fix: {m.fix}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "What is the ideal distance between the sofa and TV?", a: "Ideally, the viewing distance should be 1.5 to 2.5 times the diagonal screen size of your TV for optimal comfort." },
              { q: "What is the rule for living room rug sizes?", a: "The rug should be large enough that at least the front legs of all major furniture pieces sit on it. Avoid small \"floating\" rugs." },
              { q: "How can I make my living room feel cozier?", a: "Layer your lighting with warm lamps, add textured fabrics like throws and cushions, and incorporate personal decor items." }
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

export default LivingRoom;