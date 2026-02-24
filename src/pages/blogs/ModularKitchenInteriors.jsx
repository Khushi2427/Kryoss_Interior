import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import modularKitchen from '../../assets/blogs/Modular Kitchen.jpg';

import handleless from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/Handleless Cabinets.jpg';

import island from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/Island Kitchen.jpg';

import lShaped from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/L-Shaped Kitchens.jpg';

import parallel from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/Parallel Kitchens.jpg';

import quartz from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/Quartz Countertops.jpg';

import uShaped from '../../assets/blogs/modular/Modular Kitchen Layouts & Ideas/U-Shaped Kitchens.jpg';

import intelligentStorage from '../../assets/blogs/modular/Intelligent Kitchen Storage.jpg';

import premiumCabinet from '../../assets/blogs/modular/Premium Cabinet Finishes.jpg';


const kitchenIdeas = [
  {
    icon: '',
    title: 'L-Shape Layout',
    desc: 'Perfect for medium-sized kitchens, the L-shape maximizes corner space and creates an efficient work triangle.',
    image: lShaped
  },
  {
    icon: '',
    title: 'U-Shape Layout',
    desc: 'Ideal for large kitchens, the U-shape provides maximum storage and counter space on three walls.',
    image: uShaped
  },
  {
    icon: '',
    title: 'Island Kitchen',
    desc: 'A kitchen island adds extra prep space, seating, and storage while becoming the social hub of the home.',
    image: island
  },
  {
    icon: '',
    title: 'Parallel Layout',
    desc: 'Two parallel counters facing each other - efficient for narrow kitchens and professional-style cooking.',
    image: parallel
  },
  {
    icon: '',
    title: 'Handleless Cabinets',
    desc: 'Push-to-open or J-pull cabinets create a seamless, minimalist look that is easy to clean and maintain.',
    image: handleless
  },
  {
    icon: '',
    title: 'Quartz Countertops',
    desc: 'Engineered quartz is scratch-resistant, non-porous, and available in hundreds of colours and patterns.',
    image: quartz
  }
];
const faqs = [
  { q: 'What is the best modular kitchen layout for a small kitchen?', a: 'For small kitchens, a straight or L-shaped layout works best. Use wall-mounted cabinets to maximize vertical storage, and choose light colours to make the space feel larger.' },
  { q: 'How long does a modular kitchen installation take?', a: 'A standard modular kitchen installation takes 7-14 days. This includes delivery, assembly, and fitting. Custom designs with special finishes may take 3-4 weeks.' },
  { q: 'What is the cost of a modular kitchen in India?', a: 'Modular kitchens range from Rs. 1.5 lakhs for basic designs to Rs. 5+ lakhs for premium finishes with imported hardware. The cost depends on size, materials, and appliances.' },
  { q: 'What countertop material is best for Indian kitchens?', a: 'Quartz is the most popular choice for Indian kitchens due to its heat resistance, durability, and low maintenance. Granite is also a great option for its natural beauty and strength.' },
];

const ModularKitchenInteriors = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const refs = useRef({});
  const reg = (id) => (el) => { if (el) refs.current[id] = el; };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    );
    Object.values(refs.current).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navSections = ['intro', 'ideas', 'styles', 'faq', 'cta'];
  const toc = [
    { id: 'ideas', label: 'Kitchen Layouts', emoji: '' },
    { id: 'styles', label: 'Finishes & Storage', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={modularKitchen} alt="Modular Kitchen" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Modular Kitchen Ideas for a <em>Smarter Home</em></h1>
            <p className="blog-hero__subtitle">Precision-engineered kitchens that combine beautiful design with intelligent storage and durable finishes.</p>
            <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Layouts <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      <nav className="blog-nav-dots">
        {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
      </nav>

      <div className="blog-body">
        <div className="blog-toc">
          <div className="blog-toc__title">Table of Contents</div>
          <div className="blog-toc__grid">
            {toc.map(item => <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}><span>{item.emoji}</span>{item.label}</button>)}
          </div>
        </div>

        {/* INTRO */}
        <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-intro">
            <div className="blog-intro-grid">
              <div>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>The Kitchen</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Heart of Your Home Deserves the Best</h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  A modular kitchen is not just about storage - it is about creating a space where cooking becomes a pleasure. Smart layouts, premium finishes, and intelligent storage solutions transform your kitchen into a functional work of art.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we engineer kitchens that are as beautiful as they are functional - built to last a lifetime.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">40%</div>
                <p className="blog-intro__stat-label">Faster installation vs traditional carpentry</p>
                <div style={{ marginTop: '2rem' }}>
                  <div className="blog-intro__stat" style={{ fontSize: '3.5rem' }}>5yr</div>
                  <p className="blog-intro__stat-label">Warranty on all modular kitchen products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src={premiumCabinet} alt="Premium Modular Kitchen - Kryoss Interior" />
          <div className="blog-wide-image__caption">Premium Modular Kitchen with Island â€¢ Kryoss Interior</div>
        </div>

        {/* KITCHEN IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Kitchen Layouts</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Modular Kitchen <em>Layouts & Ideas</em></h2>
          <div className="blog-img-grid">
            {kitchenIdeas.map((idea, i) => (
              <div key={i} className="blog-img-card">
                <img src={idea.image} alt={idea.title} className="blog-img-card__image" />
                <div className="blog-img-card__body">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{idea.icon}</div>
                  <h3 className="blog-img-card__title">{idea.title}</h3>
                  <p className="blog-img-card__desc">{idea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPLIT: FINISHES */}
        <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Cabinet Finishes</div>
              <h2 className="blog-section-title">Premium <em>Cabinet Finishes</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The finish of your kitchen cabinets defines its overall look and feel. Choose from a range of premium finishes to match your style and lifestyle.
              </p>
              <div className="blog-checklist">
                {['Acrylic high-gloss for a sleek, modern look', 'Matte laminate for a sophisticated, understated feel', 'Membrane finish for a smooth, seamless appearance', 'PU paint for a premium, furniture-like quality', 'Veneer for a natural, warm wood aesthetic'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src={intelligentStorage} alt="Kitchen Cabinet Finishes" />
            </div>
          </div>

          <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Smart Storage</div>
              <h2 className="blog-section-title">Intelligent <em>Kitchen Storage</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Smart storage solutions make your kitchen more organized, efficient, and enjoyable to use. Every inch of space is optimized for maximum utility.
              </p>
              <div className="blog-checklist">
                {['Pull-out pantry units for deep cabinets', 'Corner carousel units to utilize corner space', 'Drawer organizers for cutlery and utensils', 'Tall unit with integrated appliance housing', 'Under-sink pull-out for cleaning supplies'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src={island} alt="Kitchen Storage Solutions" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
          {[
            { number: '4', label: 'Layout Options' },
            { number: '50+', label: 'Finish Choices' },
            { number: '5yr', label: 'Product Warranty' },
            { number: '14days', label: 'Avg. Installation' },
          ].map((stat, i) => (
            <div key={i} className="blog-stat">
              <div className="blog-stat__number">{stat.number}</div>
              <div className="blog-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
          <div className="blog-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                <div className="blog-faq__question">
                  <span className="blog-faq__question-text">{faq.q}</span>
                  <span className="blog-faq__toggle">+</span>
                </div>
                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Modular Kitchen</em></h2>
          <p className="blog-cta-section__subtitle">Get a custom modular kitchen designed and installed by our expert team - on time and within budget.</p>
          <Link to="/contact-us" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModularKitchenInteriors;
