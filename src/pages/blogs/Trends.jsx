import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const trends2026 = [
    { num: '01', title: 'Biophilic Design', desc: 'Bringing nature indoors through living walls, natural materials, organic shapes, and abundant greenery.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80', tag: 'Nature' },
    { num: '02', title: 'Quiet Luxury', desc: 'Understated elegance through premium materials, neutral palettes, and impeccable craftsmanship - no logos needed.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', tag: 'Luxury' },
    { num: '03', title: 'Sustainable Interiors', desc: 'Recycled materials, upcycled furniture, energy-efficient lighting, and low-VOC paints for eco-conscious living.', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80', tag: 'Eco' },
    { num: '04', title: 'Curved Forms', desc: 'Soft, rounded furniture, arched doorways, and organic shapes replace sharp angles for a warmer, more welcoming aesthetic.', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80', tag: 'Form' },
    { num: '05', title: 'Warm Minimalism', desc: 'The cold minimalism of the 2010s gives way to warmer tones, natural textures, and layered comfort.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', tag: 'Minimal' },
    { num: '06', title: 'Statement Ceilings', desc: 'The fifth wall gets its moment - coffered ceilings, bold paint, wallpaper, and dramatic lighting fixtures.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', tag: 'Ceilings' },
    { num: '07', title: 'Japandi Style', desc: 'The fusion of Japanese minimalism and Scandinavian functionality - clean lines, natural materials, and serene spaces.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', tag: 'Japandi' },
    { num: '08', title: 'Smart Home Integration', desc: 'Invisible technology - automated lighting, climate control, and security seamlessly integrated into beautiful interiors.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80', tag: 'Tech' },
];

const Trends = () => {
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
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=80" alt="Interior Design Trends 2026" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Interior Design Trends Defining <em>2026</em></h1>
                        <p className="blog-hero__subtitle">From biophilic design to quiet luxury - the 8 trends shaping the future of interior design this year.</p>
                        <button onClick={() => scrollTo('trends')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Trends <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
            </div>

            <div className="blog-body">
                {/* INTRO */}
                <section ref={reg('intro')} data-section="intro" style={{ marginTop: '4rem', marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-intro">
                        <div className="blog-intro-grid">
                            <div>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>2026 Trends</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>What's Shaping Interior Design in 2026</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Interior design in 2026 is defined by a return to nature, a rejection of excess, and a deep appreciation for craftsmanship. These 8 trends reflect a broader cultural shift towards mindful, meaningful living.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we stay ahead of trends to bring you designs that are both current and timeless.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">8</div>
                                <p className="blog-intro__stat-label">Key trends defining interior design in 2026</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WIDE BANNER */}
                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80" alt="2026 Interior Design Trends - Kryoss Interior" />
                    <div className="blog-wide-image__caption">2026 Interior Design Trends â€¢ Kryoss Interior</div>
                </div>

                {/* TRENDS GRID */}
                <section id="trends" ref={reg('trends')} data-section="trends" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>2026 Trends</div>
                        <h2 className="blog-section-title">The 8 Biggest <em>Design Trends</em></h2>
                        <p className="blog-section-subtitle" style={{ margin: '0 auto' }}>Explore the trends that are reshaping homes across India and the world.</p>
                    </div>
                    <div className="blog-img-grid blog-img-grid--3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {trends2026.map((trend, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={trend.image} alt={trend.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div className="blog-img-card__num">{trend.num}</div>
                                    <span className="blog-img-card__tag">{trend.tag}</span>
                                    <h3 className="blog-img-card__title">{trend.title}</h3>
                                    <p className="blog-img-card__desc">{trend.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SPOTLIGHT: QUIET LUXURY */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Trend Spotlight</div>
                            <h2 className="blog-section-title">The Rise of <em>Quiet Luxury</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Quiet luxury is the defining aesthetic of 2026 - understated elegance that communicates wealth through quality, not quantity. Think cashmere throws, linen upholstery, and hand-crafted furniture.
                            </p>
                            <div className="blog-checklist">
                                {['Neutral, muted colour palettes', 'Premium natural materials (linen, cashmere, marble)', 'Handcrafted, artisanal furniture pieces', 'Minimal ornamentation - let materials speak', 'Impeccable attention to detail and finish'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80" alt="Quiet Luxury Interior" />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Bring 2026 Trends to <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Your Home</em></h2>
                    <p className="blog-cta-section__subtitle">Let our designers incorporate the latest trends into a timeless design that is uniquely yours.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">
                        Get a Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Trends;
