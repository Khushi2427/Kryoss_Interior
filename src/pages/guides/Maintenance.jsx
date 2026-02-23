import React, { useState } from 'react';
import '../blogs/BlogArticle.css';

const MaintenanceGuide = () => {
  const [frequency, setFrequency] = useState('daily');
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const frequencies = {
    daily: {
      title: "Daily & Weekly",
      desc: "Small habits prevent big damage. A few minutes each day keeps your home fresh.",
      sections: [
        { area: "Kitchen", task: "Wipe counters immediately after cooking. Dry sink area.", icon: '' },
        { area: "Floors", task: "Sweep/Vacuum daily. Mop with mild cleaner avoiding excess water.", icon: '' },
        { area: "Bathrooms", task: "Squeegee glass partitions. Ensure exhaust fans run.", icon: '' },
        { area: "Furniture", task: "Dust surfaces with a microfiber cloth. Use coasters.", icon: '' }
      ]
    },
    monthly: {
      title: "Monthly & Periodic",
      desc: "Deeper checks to ensure longevity of hardware and systems.",
      sections: [
        { area: "Hardware", task: "Tighten loose hinges/handles. Check drawer channels.", icon: '' },
        { area: "Appliances", task: "Clean chimney filters. Descale washing machine/dishwasher.", icon: '' },
        { area: "Upholstery", task: "Vacuum sofas and mattresses. rotate cushions.", icon: '' },
        { area: "Grout", task: "Check tile grout for discoloration or cracks.", icon: '' }
      ]
    }
  };

  const materials = [
    {
      name: "Laminates & Acrylic",
      icon: '',
      dos: ["Use mild liquid soap", "Soft cotton/microfiber cloth", "Wipe dry immediately"],
      donts: ["Steel wool/scrubbers", "Harsh chemical solvents", "Leaving water standing"]
    },
    {
      name: "Natural Wood/Veneer",
      icon: '',
      dos: ["Dust regularly", "Use specific wood polish", "Control humidity"],
      donts: ["Direct sunlight (fades)", "Wet mopping", "Hot objects directly on surface"]
    },
    {
      name: "Glass & Mirrors",
      icon: '',
      dos: ["Class cleaner liquid", "Newspaper for streak-free", "Circular wiping motion"],
      donts: ["Abrasive sponges", "Acidic cleaners", "excessive pressure"]
    },
    {
      name: "Quartz/Stone",
      icon: '',
      dos: ["pH neutral cleaner", "Immediate spill cleanup", "Cutting boards"],
      donts: ["Bleach/Acid", "Sitting/standing on counters", "Extreme heat direct"]
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85" alt="Home Maintenance" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Maintenance<br /><em>Guide</em></h1>
            <p className="blog-hero__subtitle">Preserve Beauty. Ensure Longevity. - Simple Care for Lasting Value.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80" alt="Cleaning Utility" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Longevity</div>
              <h2 className="blog-section-title">Care is <em style={{ color: 'var(--kr-red)' }}>Investment</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                Good design lasts longer when cared for. Regular maintenance prevents expensive repairs
                and keeps your interior looking as pristine as day one.
              </p>
              <div className="blog-checklist">
                {["Prevents wear", "Saves money", "Hygiene & health", "Retains value"].map(item => (
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
          <h2 className="blog-section-title">Care <em style={{ color: '#fff' }}>Schedule</em></h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button onClick={() => setFrequency('daily')} style={{
              padding: '1rem 2rem',
              background: frequency === 'daily' ? 'var(--kr-red)' : 'transparent',
              border: '1px solid var(--kr-red)',
              color: '#fff', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>Daily & Weekly</button>
            <button onClick={() => setFrequency('monthly')} style={{
              padding: '1rem 2rem',
              background: frequency === 'monthly' ? 'var(--kr-red)' : 'transparent',
              border: '1px solid var(--kr-red)',
              color: '#fff', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>Monthly</button>
          </div>

          <div style={{ background: '#1a1a1a', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{frequencies[frequency].title}</h3>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>{frequencies[frequency].desc}</p>
            <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {frequencies[frequency].sections.map((sec, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{sec.icon}</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{sec.area}</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>{sec.task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Material <em style={{ color: '#fff' }}>Specifics</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {materials.map((mat, i) => (
                <button key={i} onClick={() => setActiveMaterial(i)} style={{
                  padding: '1.5rem', textAlign: 'left',
                  background: activeMaterial === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeMaterial === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeMaterial === i ? '#fff' : '#888',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{mat.name}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{materials[activeMaterial].icon}</div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '2rem' }}>{materials[activeMaterial].name}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#4ade80', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Do's</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {materials[activeMaterial].dos.map((d, k) => (
                      <li key={k} style={{ marginBottom: '0.5rem', color: '#ccc', display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: '#4ade80' }}></span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#f87171', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Don'ts</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {materials[activeMaterial].donts.map((d, k) => (
                      <li key={k} style={{ marginBottom: '0.5rem', color: '#ccc', display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: '#f87171' }}></span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "Is it safe to use bleach on tiles?", a: "Avoid harsh chemicals like acid or strong bleach as they strip the protective polish and damage grout lines permanently." },
              { q: "How often should I check for plumbing leaks?", a: "Inspect under sinks monthly. Small drips can cause severe wood rot and mould behind cabinets if left unchecked." },
              { q: "Does overloading really damage drawers?", a: "Yes. Heavy weight ruins the alignment of telescopic channels and weakens the hinges, leading to sagging shutters." }
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

export default MaintenanceGuide;