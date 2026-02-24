import React, { useState } from 'react';
import '../blogs/BlogArticle.css';
import bathBanner from '../../assets/guides/Bathroom banner.jpg';
import bathCareful from '../../assets/guides/Bathrooms need the careful planning.jpg';
import flooringWalls from '../../assets/guides/Flooring & Walls.jpg';
import storageSolutions from '../../assets/guides/Storage Solutions.jpg';
import sanitaryFittings from '../../assets/guides/Sanitary Fittings.jpeg';
import layoutPlanning from '../../assets/guides/Layout Planning.jpg';
import lightingVentilation from '../../assets/guides/Lighting & Ventilation.jpg';



const Bathroom = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const keyElements = [
    {
      number: "01",
      title: "Layout Planning",
      icon: '',
      desc: "Separate wet and dry areas with correct placement of WC, washbasin, and shower. Enough circulation space makes even small bathrooms feel organized.",
      img: layoutPlanning,
      tags: ["Zoning", "Circulation", "Placement"]
    },
    {
      number: "02",
      title: "Flooring & Walls",
      icon: '',
      desc: "Anti-skid floor tiles, moisture-resistant wall tiles, and easy-to-clean surfaces. Material quality directly affects safety and longevity.",
      img: flooringWalls,
      tags: ["Anti-skid", "Waterproof", "Durable"]
    },
    {
      number: "03",
      title: "Storage Solutions",
      icon: '',
      desc: "Vanity units, mirror cabinets, recessed wall shelves, and under-sink storage. Smart storage keeps essentials accessible without mess.",
      img: storageSolutions,
      tags: ["Vanity", "Shelves", "Cabinets"]
    },
    {
      number: "04",
      title: "Lighting & Ventilation",
      icon: '',
      desc: "Bright task lighting near mirrors, soft ambient lighting, and exhaust fans or natural ventilation to prevent moisture buildup and odour.",
      img: lightingVentilation,
      tags: ["Task Light", "Ambient", "Exhaust"]
    },
    {
      number: "05",
      title: "Sanitary Fittings",
      icon: '',
      desc: "Wall-mounted WC for easy cleaning, quality faucets, and shower partitions for wet areas. Reliable fixtures reduce maintenance issues over time.",
      img: sanitaryFittings,
      tags: ["Wall-mount", "Faucets", "Partitions"]
    }
  ];

  const smallSpaceTips = [
    { tip: "Light-coloured tiles", detail: "Pale tones reflect light and visually expand the room.", icon: '' },
    { tip: "Wall-mounted fixtures", detail: "Free up floor space and make mopping effortless.", icon: '' },
    { tip: "Sliding shower partitions", detail: "Eliminate swing clearance needed by hinged doors.", icon: '' },
    { tip: "Mirrors for visual depth", detail: "Strategically placed mirrors double the perceived space.", icon: '' },
  ];

  return (
    <div className="blog-page">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <div className="blog-hero">
        <img src={bathBanner} alt="Elegant Bathroom" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Bathroom<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Plan for Comfort, Safety & Easy Maintenance - Clean, Functional, Well-Balanced.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        {/* ── INTRO ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src={bathCareful} alt="Modern Bathroom" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Why It Matters</div>
              <h2 className="blog-section-title">Bathrooms need the <em style={{ color: 'var(--kr-red)' }}>careful planning</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Constant moisture, daily use, and safety concerns make bathrooms unique design challenges.
                At Kryoss Interior, every bathroom design focuses on durability, functionality, and ease of use.
              </p>
              <blockquote style={{ borderLeft: '3px solid var(--kr-red)', paddingLeft: '1.5rem', color: '#fff', fontStyle: 'italic', fontSize: '1.1rem' }}>
                "Smart planning prevents long-term problems and improves everyday comfort."
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── KEY ELEMENTS ────────────────────────────────────────── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Core Principles</div>
          <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Key Elements of a <em style={{ color: '#fff' }}>Well-Designed Bathroom</em></h2>

          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* Tabs */}
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

            {/* Content */}
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

        {/* ── SMALL SPACE TIPS ────────────────────────────────────── */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Small Space <em>Solutions</em></h2>
          <div className="blog-feature-grid">
            {smallSpaceTips.map((tip, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon">{tip.icon}</div>
                <h3 className="blog-feature-title">{tip.tip}</h3>
                <p className="blog-feature-desc">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "What is the safest flooring for bathrooms?", a: "Anti-skid matte finish vitrified tiles or natural stone with a rough texture are the safest options to prevent slips in wet areas." },
              { q: "How can I improve ventilation in a windowless bathroom?", a: "Install a high-capacity exhaust fan ducted to the outside, and consider using a dehumidifier to prevent mold growth." },
              { q: "Are wall-mounted (floating) toilets better?", a: "Yes, they make floor cleaning much easier, save visual space, and give the bathroom a modern, uncluttered look." }
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

export default Bathroom;