import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import hero from '../../assets/design-gallery/customise-kitchen.jpg';
import kitchen from '../../assets/calculators/kitchen.png';

const LAYOUT_BASE = {
  straight: { label: "Straight", sqft: 8, icon: '', desc: "Compact & efficient" },
  lShaped: { label: "L-Shaped", sqft: 14, icon: '', desc: "Most popular choice" },
  parallel: { label: "Parallel", sqft: 18, icon: '', desc: "Great workflow zones" },
  uShaped: { label: "U-Shaped", sqft: 24, icon: '', desc: "Maximum storage" },
  island: { label: "Island", sqft: 30, icon: '', desc: "Open & social" },
};

const CABINET_FINISH = {
  laminate: { label: "Laminate", pricePerSqft: 850, tag: "Budget-Friendly" },
  membrane: { label: "PVC Membrane", pricePerSqft: 1100, tag: "Durable" },
  acrylic: { label: "Acrylic", pricePerSqft: 1500, tag: "High-Gloss" },
  veneer: { label: "Wood Veneer", pricePerSqft: 2000, tag: "Premium" },
  lacquer: { label: "Lacquer", pricePerSqft: 2600, tag: "Luxury" },
};

const COUNTERTOP = {
  granite: { label: "Granite", cost: 18000 },
  quartz: { label: "Quartz", cost: 32000 },
  marble: { label: "Marble", cost: 45000 },
  corian: { label: "Corian", cost: 28000 },
};

const HARDWARE = {
  standard: { label: "Standard", cost: 8000, desc: "Basic hinges & channels" },
  soft: { label: "Soft-Close", cost: 18000, desc: "Blum / Hettich fittings" },
  premium: { label: "Premium", cost: 32000, desc: "Full German hardware" },
};

const STORAGE = {
  basic: { label: "Basic", cost: 0, desc: "Fixed shelves only" },
  pullout: { label: "Pull-Out Units", cost: 15000, desc: "Drawers & pull-outs" },
  magic: { label: "Magic Corner", cost: 28000, desc: "Corner units + tandem" },
};

const SIZE_MULTIPLIER = {
  small: { label: "Small  (< 60 sq ft)", mult: 0.8 },
  medium: { label: "Medium (60-100 sq ft)", mult: 1.0 },
  large: { label: "Large  (100-150 sq ft)", mult: 1.35 },
  xlarge: { label: "XL     (150+ sq ft)", mult: 1.75 },
};

function formatINR(v) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);
}

export default function KitchenCalculator() {
  const [layout, setLayout] = useState("lShaped");
  const [size, setSize] = useState("medium");
  const [cabinet, setCabinet] = useState("laminate");
  const [counter, setCounter] = useState("granite");
  const [hardware, setHardware] = useState("soft");
  const [storage, setStorage] = useState("basic");
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  useEffect(() => {
    const sm = SIZE_MULTIPLIER[size].mult;
    const layoutSqft = LAYOUT_BASE[layout].sqft;
    const cabinetCost = Math.round(layoutSqft * CABINET_FINISH[cabinet].pricePerSqft * sm);
    const counterCost = Math.round(COUNTERTOP[counter].cost * sm);
    const hardwareCost = HARDWARE[hardware].cost;
    const storageCost = STORAGE[storage].cost;
    const labourCost = Math.round(cabinetCost * 0.18);
    const sum = cabinetCost + counterCost + hardwareCost + storageCost + labourCost;

    setBreakdown({ cabinetCost, counterCost, hardwareCost, storageCost, labourCost });
    setTotal(sum);
  }, [layout, size, cabinet, counter, hardware, storage]);

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
        <img src={hero} alt="Kitchen Calculator" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Design Smart.<br /><em>Budget Right.</em></h1>
            <p className="blog-hero__subtitle">Estimate your modular kitchen cost based on layout, size, and material choices.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">
        {/* CALCULATOR */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Project Estimator</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Get Your Kitchen <em>Estimate</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.08)' }}>

              {/* Layout */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Kitchen Layout</label>
                <div className="calc-grid-3">
                  {Object.entries(LAYOUT_BASE).map(([key, info]) => (
                    <button key={key} onClick={() => setLayout(key)} style={btnStyle(layout === key)}>
                      <span style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{info.icon}</span>
                      <span>{info.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Kitchen Size</label>
                <select value={size} onChange={(e) => setSize(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: '4px', background: '#fff' }}>
                  {Object.entries(SIZE_MULTIPLIER).map(([k, v]) => (
                    <option key={k} value={k}>{v.label}</option>
                  ))}
                </select>
              </div>

              {/* Cabinet */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Cabinet Finish</label>
                <div className="calc-grid-2">
                  {Object.entries(CABINET_FINISH).map(([key, info]) => (
                    <button key={key} onClick={() => setCabinet(key)} style={btnStyle(cabinet === key)}>
                      <span>{info.label}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.8 }}>Rs. {info.pricePerSqft}/sqft</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div className="calc-grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Countertop</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {Object.entries(COUNTERTOP).map(([key, info]) => (
                      <button key={key} onClick={() => setCounter(key)} style={{ ...btnStyle(counter === key), flexDirection: 'row', justifyContent: 'space-between', padding: '0.5rem 0.75rem' }}>
                        <span>{info.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '0.75rem' }}>Hardware</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {Object.entries(HARDWARE).map(([key, info]) => (
                      <button key={key} onClick={() => setHardware(key)} style={{ ...btnStyle(hardware === key), flexDirection: 'row', justifyContent: 'space-between', padding: '0.5rem 0.75rem' }}>
                        <span>{info.label}</span>
                      </button>
                    ))}
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
                  ["Cabinetry", breakdown.cabinetCost],
                  ["Countertop", breakdown.counterCost],
                  ["Hardware", breakdown.hardwareCost],
                  ["Storage", breakdown.storageCost],
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
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Why Plan Ahead?</div>
              <h2 className="blog-section-title">Smart Choices for <em>Smart Kitchens</em></h2>
              <div className="blog-checklist">
                {[
                  "Choose the right layout for your workflow",
                  "Balance aesthetics with durable materials",
                  "Control costs before signing contracts",
                  "Compare hardware grades side-by-side"
                ].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '400px' }}>
              <img src={kitchen} alt="Kitchen Planning" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}