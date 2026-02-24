import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import dcHomeTours from '../../assets/blogs/DC Home Tours.jpg';
import gupta from '../../assets/blogs/dchome/The Gupta Apartment.jpg'
import malhotra from '../../assets/blogs/dchome/The Malhotra Residence.jpg'
import verma from '../../assets/blogs/dchome/The Verma Villa.jpg'


const dcTours = [
  {
    title: 'The Malhotra Residence',
    location: 'Greater Kailash, Delhi',
    area: '3,200 sq ft',
    style: 'Modern Luxury',
    duration: '12 weeks',
    image: malhotra,
    highlights: ['Custom Italian marble flooring', 'Bespoke modular kitchen', 'Home theatre room', 'Automated lighting system'],
    desc: 'A stunning 3BHK in Greater Kailash transformed into a modern luxury home with premium Italian finishes, custom millwork, and seamless smart home integration.',
  },
  {
    title: 'The Gupta Apartment',
    location: 'Dwarka, Delhi',
    area: '1,600 sq ft',
    style: 'Scandinavian Minimal',
    duration: '7 weeks',
    image: gupta,
    highlights: ['Space-maximizing design', 'Warm wood and white palette', 'Multifunctional furniture', 'Clever hidden storage'],
    desc: 'A compact Dwarka apartment transformed into a bright, airy Scandinavian-inspired home - proving that great design is not about size, but about thoughtful choices.',
  },
  {
    title: 'The Verma Villa',
    location: 'Faridabad, NCR',
    area: '5,500 sq ft',
    style: 'Contemporary Classic',
    duration: '20 weeks',
    image: verma,
    highlights: ['Double-height entrance foyer', 'Custom art installations', 'Landscaped terrace', 'Private gym and spa'],
    desc: 'A grand villa in Faridabad designed with a contemporary classic aesthetic - timeless elegance meets modern comfort across four floors of meticulously crafted spaces.',
  },
];

const DCHomeTours = () => {
  const [activeSection, setActiveSection] = useState('intro');
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

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={dcHomeTours} alt="Delhi NCR Home Tours" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Exclusive Home Tours Across <em>Delhi NCR</em></h1>
            <p className="blog-hero__subtitle">Step inside the most beautiful homes we have designed across Delhi, Gurugram, Noida, and Faridabad.</p>
            <button onClick={() => scrollTo('tours')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Tours <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      <div className="blog-body">
        {/* STATS */}
        <div className="blog-stats-strip" style={{ marginTop: '4rem' }}>
          {[
            { number: '200+', label: 'Delhi NCR Projects' },
            { number: '3', label: 'Featured Tours' },
            { number: '10+', label: 'Years in Delhi NCR' },
            { number: '5â˜…', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="blog-stat">
              <div className="blog-stat__number">{stat.number}</div>
              <div className="blog-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* TOURS */}
        <section id="tours" ref={reg('tours')} data-section="tours" style={{ marginTop: '5rem', marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Featured Tours</div>
            <h2 className="blog-section-title">Delhi NCR's Most <em>Beautiful Homes</em></h2>
            <p className="blog-section-subtitle" style={{ margin: '0 auto' }}>Exclusive tours of real homes designed by our team across the Delhi NCR region.</p>
          </div>

          {dcTours.map((tour, i) => (
            <div key={i} className={`blog-split${i % 2 !== 0 ? ' blog-split--reverse' : ''}`} style={{ marginBottom: '5rem' }}>
              <div>
                <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>{tour.style}</div>
                <h2 className="blog-section-title">{tour.title}</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'ðŸ" Location', value: tour.location },
                    { label: 'ðŸ" Area', value: tour.area },
                    { label: 'â±ï¸ Duration', value: tour.duration },
                  ].map((detail, j) => (
                    <div key={j} style={{ background: 'var(--kr-light)', borderRadius: '12px', padding: '0.75rem 1.25rem', border: '1px solid var(--kr-border)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--kr-slate-4)', fontWeight: 600, marginBottom: '0.2rem' }}>{detail.label}</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--kr-slate)' }}>{detail.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{tour.desc}</p>
                <div className="blog-checklist">
                  {tour.highlights.map((h, j) => (
                    <div key={j} className="blog-checklist__item">
                      <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                      <span className="blog-checklist__text">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="blog-image-wrap" style={{ height: '500px' }}>
                <img src={tour.image} alt={tour.title} />
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Design Your Delhi NCR <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dream Home</em></h2>
          <p className="blog-cta-section__subtitle">Join hundreds of Delhi NCR families who have trusted Kryoss Interior to design their perfect home.</p>
          <Link to="/contact-us" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCHomeTours;
