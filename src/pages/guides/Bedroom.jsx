import React, { useState } from 'react';
import { BedDouble, DoorOpen, Lightbulb, Palette, Blinds, Footprints } from 'lucide-react';
import '../blogs/BlogArticle.css';
import bedroom from '../../assets/guides/Bedroom.jpg';
import personalRetreat from '../../assets/guides/personal retreat.jpeg';
import masterBedroom from '../../assets/guides/Master Bedroom.jpeg';
import guestBedroom from '../../assets/guides/Guest Bedroom.png';
import compactBedroom from '../../assets/guides/Compact Bedroom.jpeg';


const Bedroom = () => {
  const [activeIdea, setActiveIdea] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const considerations = [
    { title: "Bed Placement", icon: <BedDouble size={28} color="#fff" />, desc: "Centre it on the wall opposite the entrance. Leave 24 inches clearance on sides." },
    { title: "Wardrobe Planning", icon: <DoorOpen size={28} color="#fff" />, desc: "Plan door swing clearance. Standard depth is 24 inches for hanging space." },
    { title: "Lighting Layers", icon: <Lightbulb size={28} color="#fff" />, desc: "Combine ambient (ceiling), task (reading), and accent (mood) lighting." },
    { title: "Colour Palette", icon: <Palette size={28} color="#fff" />, desc: "Calming neutrals or warm tones. Avoid overly bright, stimulating colours." },
    { title: "Window Treatments", icon: <Blinds size={28} color="#fff" />, desc: "Blackout curtains for sleep, sheer for privacy during the day." },
    { title: "Flooring & Rugs", icon: <Footprints size={28} color="#fff" />, desc: "Warm wood or carpet. Rugs should extend beyond the bed for warmth." }
  ];

  const ideas = [
    {
      title: "Master Bedroom",
      icon: '',
      img: masterBedroom,
      list: ["Spacious bed with statement headboard", "Ample wardrobe storage", "Seating area if space permits", "Soft, layered lighting"]
    },
    {
      title: "Guest Bedroom",
      icon: '',
      img: guestBedroom,
      list: ["Comfortable bed with quality linen", "Basic storage for guest belongings", "Clear surface for personal items", "Warm, welcoming ambiance"]
    },
    {
      title: "Compact Bedroom",
      icon: '',
      img: compactBedroom,
      list: ["Space-saving furniture", "Multi-functional pieces", "Vertical storage solutions", "Light colours to open up space"]
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={bedroom} alt="Serene Bedroom" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Bedroom<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Rest Well. Wake Refreshed. - Plan for relaxation, storage & everyday ease.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src={personalRetreat} alt="Bedroom Layout" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Personal Sanctuary</div>
              <h2 className="blog-section-title">Your <em style={{ color: 'var(--kr-red)' }}>personal retreat</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                A well-designed bedroom promotes deeper sleep and reduces stress. From wardrobe planning to lighting choices,
                every detail contributes to how you rest at the end of each day.
              </p>
              <div className="blog-checklist">
                {["Deep Rest", "Stress-Free", "Organized", "Peaceful"].map(item => (
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
          <h2 className="blog-section-title">Key <em style={{ color: '#fff' }}>Considerations</em></h2>
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {considerations.map((item, i) => (
              <div key={i} className="blog-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', minHeight: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{
                  width: '60px', height: '60px', background: 'var(--kr-red)', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                  boxShadow: '0 10px 20px -5px rgba(196, 30, 58, 0.3)'
                }}>
                  {item.icon}
                </div>
                <h3 className="blog-card__title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--kr-slate-3)', lineHeight: '1.6', flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Styles</div>
          <h2 className="blog-section-title">Design by <em style={{ color: '#fff' }}>Type</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ideas.map((idea, i) => (
                <button key={i} onClick={() => setActiveIdea(i)} style={{
                  padding: '1.5rem', textAlign: 'left',
                  background: activeIdea === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeIdea === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeIdea === i ? '#fff' : '#888',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{idea.title}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={ideas[activeIdea].img} alt={ideas[activeIdea].title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {ideas[activeIdea].list.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', color: '#ccc' }}>
                      <span style={{ color: 'var(--kr-red)' }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "What is the ideal clearance around the bed?", a: "Aim for 24-30 inches of walking space around the bed to ensure comfortable movement and ease of making the bed." },
              { q: "Should I choose a sliding or hinged wardrobe?", a: "Sliding wardrobes save floor space and are ideal for compact rooms. Hinged wardrobes offer better visibility of contents but require swing clearance." },
              { q: "What is the best lighting temperature for bedrooms?", a: "Warm white (2700K-3000K) is best as it mimics sunset hues, promoting relaxation and better sleep cycles." }
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

export default Bedroom;