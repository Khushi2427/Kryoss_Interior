import React, { useState } from 'react';
import '../blogs/BlogArticle.css';
import materialsFinishes from '../../assets/guides/Materials-&finishesguide.jpg';
import moreThanLooks from '../../assets/guides/More than just looks.jpg';
import acrylic from '../../assets/guides/Acrylic.jpg';
import granite from '../../assets/guides/Granite.jpeg';
import particleBoard from '../../assets/guides/Particle Board.jpeg';
import Veneer from '../../assets/guides/Veneer.jpg';
import woodenFlooring from '../../assets/guides/Wooden Flooring.jpeg';
import Laminates from '../../assets/guides/Laminates.jpg';
import marble from '../../assets/guides/Marble.png';
import MDF from '../../assets/guides/MDF.jpg';
import plywood from '../../assets/guides/Plywood.jpg';
import vitrifiedTiles from '../../assets/guides/Vitrified Tiles.jpg';
import quartz from '../../assets/guides/Quartz.jpg';
import pupaint from '../../assets/guides/PU Paint.jpg';


const MaterialsFinishes = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = ["Base Materials", "Surface Finishes", "Countertops", "Flooring"];

  const materialsData = [
    // Base Materials
    [
      { name: "Plywood (BWP)", img: plywood, icon: '', desc: "The gold standard for durability. Boiling Waterproof (BWP) grade is essential for wet areas like kitchens.", pros: ["Highly durable", "Water resistant", "Strong screw holding"], cons: ["Expensive", "Heavy"] },
      { name: "MDF", img: MDF, icon: '', desc: "Engineered wood with a smooth surface. Ideal for dry areas and painted finishes (Duco/PU).", pros: ["Smooth finish", "Cost effective", "Eco-friendly"], cons: ["Not for wet areas", "Less strong than ply"] },
      { name: "Particle Board", img: particleBoard, icon: '', desc: "Budget-friendly option made from wood chips. Suitable only for low-wear, dry area furniture.", pros: ["Very cheap", "Lightweight", "Ready-made availability"], cons: ["Low durability", "Swells with moisture"] }
    ],
    // Surface Finishes
    [
      { name: "Laminates", img: Laminates, icon: '', desc: "The most popular choice. Durable, scratch-resistant, and available in thousands of matte, gloss, or textured designs.", pros: ["Scratch resistant", "Easy maintenance", "Huge variety"], cons: ["Joints visible", "Cannot be repaired"] },
      { name: "Acrylic", img: acrylic, icon: '', desc: "High-gloss mirror finish. Gives a premium modern look but requires careful maintenance against scratches.", pros: ["Glass-like gloss", "Seamless look", "UV stable"], cons: ["Scratch prone", "Fingerprint magnet", "Expensive"] },
      { name: "Veneer", img: Veneer, icon: '', desc: "Thin slices of real wood. Offers the rich, authentic warmth of timber but needs polishing and care.", pros: ["Real wood grain", "Premium aesthetic", "Can be re-polished"], cons: ["High maintenance", "Costly", "Soft surface"] },
      { name: "PU Paint", img: pupaint, icon: '', desc: "Polyurethane paint sprayed for a seamless, high-end matte or gloss finish.", pros: ["Seamless edges", "Premium feel", "Repairable"], cons: ["Very expensive", "Long application time"] }
    ],
    // Countertops
    [
      { name: "Quartz", img: quartz, icon: '', desc: "Engineered stone. Non-porous, stain-resistant, and consistent in color. The modern favorite.", pros: ["Stain resistant", "No sealing needed", "Hygenic"], cons: ["Heat sensitive", "Costly"] },
      { name: "Granite", img: granite, icon: '', desc: "Natural stone. incredibly hard and heat resistant. Unique patterns in every slab.", pros: ["Heat proof", "Indestructible", "Unique looks"], cons: ["Needs sealing", "Limited colours"] }
    ],
    // Flooring
    [
      { name: "Vitrified Tiles", img: vitrifiedTiles, icon: '', desc: "Hard, non-porous tiles. The most practical and durable choice for Indian homes.", pros: ["Zero maintenance", "Waterproof", "Durable"], cons: ["Cold underfoot", "Hard surface"] },
      { name: "Wooden Flooring", img: woodenFlooring, icon: '', desc: "Adds unmatched warmth. Engineered wood or laminate flooring is common for bedrooms.", pros: ["Warm feel", "Premium look", "Soft"], cons: ["Water sensitive", "Scratchable"] },
      { name: "Marble", img: marble, icon: '', desc: "Luxurious natural stone. Cool to touch but porous and prone to stains if not sealed.", pros: ["Luxury status", "Cool temperature", "Seamless joints"], cons: ["High maintenance", "Stains easily", "Polishing needed"] }
    ]
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={materialsFinishes} alt="Materials Guide" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Materials &<br /><em>Finishes Guide</em></h1>
            <p className="blog-hero__subtitle">Choice Defines Longevity. - Select Smart, Build Lasting.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src={moreThanLooks} alt="Material Textures" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Foundation</div>
              <h2 className="blog-section-title">More than just <em style={{ color: 'var(--kr-red)' }}>looks</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                The right material determines how your home ages. While colors fade in and out of trend,
                durability and finish quality remain the true markers of a premium interior. This guide helps you choose wisely.
              </p>
              <div className="blog-checklist">
                {["Durability first", "Maintenance level", "Budget balance", "Aesthetic fit"].map(item => (
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
          <h2 className="blog-section-title">Interactive <em style={{ color: '#fff' }}>Material Browser</em></h2>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {categories.map((cat, i) => (
              <button key={i} onClick={() => { setActiveCategory(i); setActiveMaterial(0); }} style={{
                padding: '0.75rem 1.5rem',
                border: activeCategory === i ? '1px solid var(--kr-red)' : '1px solid #333',
                background: activeCategory === i ? 'var(--kr-red)' : 'transparent',
                color: '#fff',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.8rem',
                transition: 'all 0.3s'
              }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem' }}>
            {/* Material Names List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {materialsData[activeCategory].map((mat, i) => (
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

            {/* Material Detail Pane */}
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img src={materialsData[activeCategory][activeMaterial].img} alt={materialsData[activeCategory][activeMaterial].name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--kr-red)' }}>
                  {materialsData[activeCategory][activeMaterial].icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
                  {materialsData[activeCategory][activeMaterial].name}
                </h3>
                <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  {materialsData[activeCategory][activeMaterial].desc}
                </p>
              </div>



            </div>
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "Which material is best for Kitchen cabinets?", a: "For base units (wet areas), always use BWP (Boiling Waterproof) Plywood. For wall units, MR (Moisture Resistant) Plywood or high-density MDF works well." },
              { q: "What is the best finish for a low-maintenance wardrobe?", a: "Laminates are the most durable and easy to clean. High-gloss Acrylic looks premium but shows fingerprints; Matte PU is elegant but costly." },
              { q: "Can I use wooden flooring in the kitchen?", a: "It is not recommended due to frequent spills and moisture. Use wood-finish vitrified tiles for a similar look with zero maintenance." }
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

export default MaterialsFinishes;