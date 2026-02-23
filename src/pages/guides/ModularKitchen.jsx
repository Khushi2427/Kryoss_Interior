import React, { useState } from 'react';
import '../blogs/BlogArticle.css';
import banner from '../../assets/guides/modular/banner.png';
import efficiency from '../../assets/guides/modular/efficiency.png';
import island2 from '../../assets/guides/modular/island2.png';
import lshaped from '../../assets/guides/modular/lshaped.png';
import parallel from '../../assets/guides/modular/parallel.png';
import ushaped from '../../assets/guides/modular/ushaped.png';
const ModularKitchen = () => {
  const [activeLayout, setActiveLayout] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const layouts = [
    { 
      title: "L-Shaped", 
      icon: '', 
      desc: "Ideal for compact homes. Efficient corner utilization.", 
      img: lshaped
    },
    { 
      title: "U-Shaped", 
      icon: '', 
      desc: "Maximum storage and counter space. Great for serious cooks.", 
      img: ushaped
    },
    { 
      title: "Parallel", 
      icon: '', 
      desc: "Efficient galley layout. Minimal movement between zones.", 
      img: parallel
    },
    { 
      title: "Island", 
      icon: '', 
      desc: "For large open spaces. Adds social interaction and prep space.", 
      img: island2
    }
  ];

  const considerations = [
    { title: "Material", desc: "BWP Plywood for wet areas, MDF for dry areas. Acrylic or Laminate finishes.", icon: '' },
    { title: "Work Triangle", desc: "Sink, Stove, and Fridge should form an efficient triangle.", icon: '' },
    { title: "Storage", desc: "Pull-outs, tall units, and corner carousels maximize space.", icon: '' },
    { title: "Lighting", desc: "Under-cabinet profile lights are essential for work areas.", icon: '' }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={banner} alt="Modular Kitchen" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Modular Kitchen<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Organized. Practical. Built for Daily Use. - Efficiency & Ease.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src={parallel} alt="Kitchen Workflow" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Heart of Home</div>
              <h2 className="blog-section-title">Efficiency comes <em style={{ color: 'var(--kr-red)' }}>standard</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Good modular kitchen planning improves cooking workflow, maximizes storage, and ensures easy cleaning.
                Every module is designed to save time and effort.
              </p>
              <div className="blog-checklist">
                {["Cooking workflow", "Max storage", "Easy clean", "Appliance integration"].map(item => (
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
          <h2 className="blog-section-title">Layout <em style={{ color: '#fff' }}>Options</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {layouts.map((l, i) => (
                <button key={i} onClick={() => setActiveLayout(i)} style={{
                  flex: 1,
                  padding: '0 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                  background: activeLayout === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeLayout === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeLayout === i ? '#fff' : '#888',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{l.title}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img src={layouts[activeLayout].img} alt={layouts[activeLayout].title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{layouts[activeLayout].icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{layouts[activeLayout].title}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7 }}>{layouts[activeLayout].desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Key <em style={{ color: '#fff' }}>Considerations</em></h2>
          <div className="blog-feature-grid">
            {considerations.map((c, i) => (
              <div key={i} className="blog-feature-card">
                <div className="blog-feature-icon">{c.icon}</div>
                <h3 className="blog-feature-title">{c.title}</h3>
                <p className="blog-feature-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "How long does installation take?", a: "Typically 3-6 weeks depending on the customization level and finish selected. Acrylic and PU finishes take slightly longer." },
              { q: "Modular vs. Carpenter-made?", a: "Modular kitchens offer superior machine finish, edge-banding longevity, and easy part replacement. Carpenter-made kitchens allow for odd-shaped customisation but lack the factory precision and durability of modular units." },
              { q: "What is the best maintenance routine?", a: "Wipe spills immediately to prevent staining. Clean hinges and channels every 3 months. Avoid standing water on cabinet doors." }
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

export default ModularKitchen;