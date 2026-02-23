import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import hero from '../../assets/Home/hero.png';
import home from '../../assets/calculators/home.png';
import home2 from '../../assets/calculators/home2.png';


const ROOM_COSTS = {
  basic: { livingRoom: 45000, bedroom: 35000, kitchen: 55000, bathroom: 25000, diningRoom: 30000, studyRoom: 28000 },
  premium: { livingRoom: 95000, bedroom: 75000, kitchen: 110000, bathroom: 55000, diningRoom: 65000, studyRoom: 58000 },
  luxury: { livingRoom: 180000, bedroom: 150000, kitchen: 220000, bathroom: 110000, diningRoom: 130000, studyRoom: 115000 },
};

const ROOM_LABELS = { livingRoom: "Living Room", bedroom: "Bedroom", kitchen: "Kitchen", bathroom: "Bathroom", diningRoom: "Dining Room", studyRoom: "Study Room" };
const FINISH_MULTIPLIER = { standard: 1, semiGloss: 1.2, highGloss: 1.45 };
const SIZE_MULTIPLIER = { small: 0.85, medium: 1, large: 1.3, xlarge: 1.65 };

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

const HomeCalculator = () => {
  const [tier, setTier] = useState("premium");
  const [size, setSize] = useState("medium");
  const [finish, setFinish] = useState("standard");
  const [rooms, setRooms] = useState({ livingRoom: 1, bedroom: 2, kitchen: 1, bathroom: 2, diningRoom: 1, studyRoom: 0 });
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  useEffect(() => {
    const costs = ROOM_COSTS[tier];
    const sm = SIZE_MULTIPLIER[size];
    const fm = FINISH_MULTIPLIER[finish];
    let sum = 0;
    const bd = {};
    for (const [room, count] of Object.entries(rooms)) {
      if (count > 0) {
        const cost = Math.round(costs[room] * sm * fm * count);
        bd[room] = cost;
        sum += cost;
      }
    }
    setTotal(sum);
    setBreakdown(bd);
  }, [tier, size, finish, rooms]);

  const adjustRoom = (room, delta) => {
    setRooms((prev) => ({ ...prev, [room]: Math.max(0, Math.min(8, (prev[room] || 0) + delta)) }));
  };

  const btnStyle = (active) => ({
    padding: '0.75rem 1rem', border: active ? '1px solid #c41e3a' : '1px solid #e5e5e5',
    background: active ? '#fff5f5' : '#fff', color: active ? '#c41e3a' : '#1a1a1a',
    borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600,
    transition: 'all 0.2s', width: '100%'
  });

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={home} alt="Cost Calculator" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Estimate Your <em>Dream Home</em></h1>
            <p className="blog-hero__subtitle">Plan your budget effectively with our comprehensive interior cost estimator.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Cost Estimator</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Calculate Your <em>Investment</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Controls */}
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.08)' }}>

              {/* Tier */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '1rem' }}>Quality Tier</label>
                <div className="calc-grid-3">
                  {['basic', 'premium', 'luxury'].map(t => (
                    <button key={t} onClick={() => setTier(t)} style={btnStyle(tier === t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '1rem' }}>Apartment Size</label>
                <div className="calc-grid-4">
                  {['small', 'medium', 'large', 'xlarge'].map(s => (
                    <button key={s} onClick={() => setSize(s)} style={btnStyle(size === s)}>{s === 'xlarge' ? 'XL' : s.charAt(0).toUpperCase() + s.slice(1)}</button>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '1rem' }}>Rooms to Design</label>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {Object.entries(rooms).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', background: '#fafafa', borderRadius: '4px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>{ROOM_LABELS[key]}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button onClick={() => adjustRoom(key, -1)} style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'pointer', color: '#c41e3a', fontWeight: 'bold' }}>-</button>
                        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 600 }}>{val}</span>
                        <button onClick={() => adjustRoom(key, 1)} style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'pointer', color: '#c41e3a', fontWeight: 'bold' }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '1rem' }}>Finish Type</label>
                <div className="calc-grid-3">
                  {Object.keys(FINISH_MULTIPLIER).map(f => (
                    <button key={f} onClick={() => setFinish(f)} style={btnStyle(finish === f)}>{f.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</button>
                  ))}
                </div>
              </div>

            </div>

            {/* Summary */}
            <div style={{ background: '#c41e3a', padding: '2.5rem', borderRadius: '4px', color: '#fff', position: 'sticky', top: '120px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Estimated Cost</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", marginBottom: '0.5rem', lineHeight: 1 }}>{formatINR(total)}</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '2rem' }}>*Indicative estimation based on market rates</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.9 }}>Breakdown</h4>
                {Object.entries(breakdown).map(([key, val]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ opacity: 0.8 }}>{ROOM_LABELS[key]}</span>
                    <span style={{ fontWeight: 600 }}>{formatINR(val)}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact-us" style={{ display: 'block', width: '100%', padding: '1rem', background: '#fff', color: '#c41e3a', textAlign: 'center', textDecoration: 'none', fontWeight: 700, borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Get Official Quote
              </Link>
            </div>

          </div>
        </section>

        {/* Why Use Calculator */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Why Estimate?</div>
              <h2 className="blog-section-title">Smart Budgeting for <em>Smart Homes</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Understanding your budget upfront allows for better design decisions and eliminates surprises during execution.
              </p>
              <div className="blog-checklist">
                {['Get a realistic budget baseline', 'Explore how finishes affect cost', 'Plan room-by-room investment', 'Compare basic vs luxury options'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '400px' }}>
              <img src={home2} alt="Interior Plan" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeCalculator;