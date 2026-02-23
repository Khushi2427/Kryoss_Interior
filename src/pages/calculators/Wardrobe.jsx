import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';

const WARDROBE_TYPE = {
  sliding: { label: "Sliding", icon: '', desc: "Space-saving, sleek", baseCost: 1800 },
  hinged: { label: "Hinged", icon: '', desc: "Classic, full access", baseCost: 1400 },
  walkIn: { label: "Walk-In", icon: '', desc: "Maximum space", baseCost: 2200 },
  openShelf: { label: "Open", icon: '', desc: "Minimal & modern", baseCost: 950 },
};

const WARDROBE_SIZE = {
  s2: { label: '2 ft wide', sqft: 16, icon: '' },
  s4: { label: '4 ft wide', sqft: 28, icon: '' },
  s6: { label: '6 ft wide', sqft: 42, icon: '' },
  s8: { label: '8 ft wide', sqft: 56, icon: '' },
};

const SHUTTER_FINISH = {
  laminate: { label: "Laminate", tag: "Economical", extra: 0 },
  membrane: { label: "PVC Membrane", tag: "Durable", extra: 300 },
  acrylic: { label: "Acrylic", tag: "High-Gloss", extra: 650 },
  veneer: { label: "Wood Veneer", tag: "Premium", extra: 1100 },
  glass: { label: "Glass Shutter", tag: "Contemporary", extra: 900 },
};

const CARCASS = {
  bwp: { label: "BWP Plywood", desc: "Waterproof", mult: 1.25 },
  bwr: { label: "BWR Plywood", desc: "Moisture-resistant", mult: 1.0 },
  mdf: { label: "MDF Board", desc: "Smooth finish", mult: 0.85 },
  hdhmr: { label: "HDHMR", desc: "Sturdy", mult: 1.15 },
};

const ACCESSORIES = {
  basic: { label: "Basic", desc: "Fixed shelves + rod", cost: 0 },
  mid: { label: "Standard", desc: "Drawers + shoe rack", cost: 12000 },
  premium: { label: "Premium", desc: "Full fittings", cost: 28000 },
};

const HARDWARE = {
  standard: { label: "Standard", desc: "Basic", cost: 0 },
  hettich: { label: "Hettich", desc: "German", cost: 8000 },
  hafele: { label: "Häfele", desc: "Premium", cost: 14000 },
};

const LOFT = {
  none: { label: "No Loft", cost: 0 },
  basic: { label: "With Loft", cost: 8000 },
  mirror: { label: "Loft + Mirror", cost: 14000 },
};

function formatINR(v) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);
}

export default function WardrobeCalculator() {
  const [type, setType] = useState("sliding");
  const [size, setSize] = useState("s6");
  const [finish, setFinish] = useState("laminate");
  const [carcass, setCarcass] = useState("bwr");
  const [accessory, setAccessory] = useState("basic");
  const [hardware, setHardware] = useState("hettich");
  const [loft, setLoft] = useState("none");
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  useEffect(() => {
    const t = WARDROBE_TYPE[type];
    const s = WARDROBE_SIZE[size];
    const f = SHUTTER_FINISH[finish];
    const c = CARCASS[carcass];
    const ac = ACCESSORIES[accessory];
    const hw = HARDWARE[hardware];
    const lf = LOFT[loft];

    const carcassCost = Math.round(s.sqft * 420 * c.mult);
    const shutterCost = Math.round(s.sqft * (t.baseCost + f.extra));
    const accessoryCost = ac.cost;
    const hardwareCost = hw.cost;
    const loftCost = lf.cost;
    const labourCost = Math.round((carcassCost + shutterCost) * 0.15);
    const sum = carcassCost + shutterCost + accessoryCost + hardwareCost + loftCost + labourCost;

    setBreakdown({ carcassCost, shutterCost, accessoryCost, hardwareCost, loftCost, labourCost });
    setTotal(sum);
  }, [type, size, finish, carcass, accessory, hardware, loft]);

  const btnStyle = (active) => ({
    padding: '0.75rem', border: active ? '1px solid #c41e3a' : '1px solid #e5e5e5',
    background: active ? '#fff5f5' : '#fff', color: active ? '#c41e3a' : '#1a1a1a',
    borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
    transition: 'all 0.2s', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
  });

  return (
    <div className="blog-page">
      {/* HERO */}
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1595514020173-66b6e3a6a95e?w=1800&q=80" alt="Wardrobe Calculator" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Organise Better.<br /><em>Live Clutter-Free.</em></h1>
            <p className="blog-hero__subtitle">Estimate your wardrobe cost based on size, design, and storage needs.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">
        {/* CALCULATOR */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Project Estimator</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Get Your Wardrobe <em>Estimate</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.08)' }}>

              {/* Type */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Wardrobe Type</label>
                <div className="calc-grid-2">
                  {Object.entries(WARDROBE_TYPE).map(([key, info]) => (
                    <button key={key} onClick={() => setType(key)} style={btnStyle(type === key)}>
                      <span style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{info.icon}</span>
                      <span>{info.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Size</label>
                <div className="calc-grid-2">
                  {Object.entries(WARDROBE_SIZE).map(([key, info]) => (
                    <button key={key} onClick={() => setSize(key)} style={btnStyle(size === key)}>
                      <span>{info.label}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.8 }}>~{info.sqft} sqft</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Shutter Finish</label>
                <div className="calc-grid-2">
                  {Object.entries(SHUTTER_FINISH).map(([key, info]) => (
                    <button key={key} onClick={() => setFinish(key)} style={btnStyle(finish === key)}>
                      <span>{info.label}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.8 }}>{info.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Accessories</label>
                  <div className="calc-grid-3">
                    {Object.entries(ACCESSORIES).map(([key, info]) => (
                      <button key={key} onClick={() => setAccessory(key)} style={{ ...btnStyle(accessory === key), padding: '0.5rem' }}>{info.label}</button>
                    ))}
                  </div>
                </div>

                <div className="calc-grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Carcass Material</label>
                    <select value={carcass} onChange={(e) => setCarcass(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: '4px', background: '#fff' }}>
                      {Object.entries(CARCASS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Loft</label>
                    <select value={loft} onChange={(e) => setLoft(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: '4px', background: '#fff' }}>
                      {Object.entries(LOFT).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                    </select>
                  </div>
                </div>

              </div>

            </div>

            {/* Summary */}
            <div style={{ background: '#c41e3a', padding: '2.5rem', borderRadius: '4px', color: '#fff', position: 'sticky', top: '120px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Estimated Cost</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", marginBottom: '0.5rem', lineHeight: 1 }}>{formatINR(total)}</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '2rem' }}>*Indicative estimation</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                {[
                  ["Carcass", breakdown.carcassCost],
                  ["Shutters", breakdown.shutterCost],
                  ["Accessories", breakdown.accessoryCost],
                  ["Hardware", breakdown.hardwareCost],
                  ["Loft", breakdown.loftCost],
                  ["Labour", breakdown.labourCost],
                ].map(([lbl, val]) => (
                  <div key={lbl} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ opacity: 0.8 }}>{lbl}</span>
                    <span style={{ fontWeight: 600 }}>{formatINR(val || 0)}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact-us" style={{ display: 'block', width: '100%', padding: '1rem', background: '#fff', color: '#c41e3a', textAlign: 'center', textDecoration: 'none', fontWeight: 700, borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Book Consultation
              </Link>
            </div>

          </div>
        </section>

        {/* Info Section */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Key Considerations</div>
              <h2 className="blog-section-title">Budgeting for <em>Storage</em></h2>
              <div className="blog-checklist">
                {[
                  "Internal accessories drive usability and cost",
                  "Sliding shutters save space but cost more",
                  "High-gloss finishes are premium & durable",
                  "Don't forget loft storage for seasonal items"
                ].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '400px' }}>
              <img src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=900&q=80" alt="Wardrobe Detail" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}