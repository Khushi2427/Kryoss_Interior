import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import about from '../../assets/more/about.png';
import about1 from '../../assets/more/about1.png';
import '../blogs/BlogArticle.css';
import { Target, Users, Layout, ShieldCheck, Clock, Lightbulb, ArrowRight, Heart, Star } from 'lucide-react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            {/* Hero Section */}
            <div className="blog-hero">
                <img
                    src={about}
                    alt="Kryoss Interior Design Studio"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Designing Homes That Are<br />Meant to Be <em style={{ color: 'var(--kr-gold)' }}>Lived In</em></h1>
                        <p className="blog-hero__subtitle">
                            At Kryoss Interior, we believe interior design is not just about how a space looks — it’s about how it supports everyday life. A well-designed home should feel comfortable, organized, and effortless to live in.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro Split */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src={about1} alt="Interior Team" />
                        <div className="blog-image-caption">Teamwork & Vision</div>
                    </div>
                    <div>
                        <div className="section-label">Who We Are</div>
                        <h2 className="blog-section-title">Thoughtfully Planned <br /><em>Home Interiors</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            Kryoss Interior is a design-led interior solutions brand offering thoughtfully planned home interiors. We work with homeowners who value clarity, functionality, and long-term comfort.
                        </p>
                        <div className="blog-checklist">
                            {[
                                "Smart planning & practical layouts",
                                "Durable materials built to last",
                                "Designs tailored to real lifestyles",
                                "Clear communication & transparency"
                            ].map((item, i) => (
                                <div key={i} className="blog-checklist__item">
                                    <div className="blog-checklist__icon">
                                        <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                                    </div>
                                    <span className="blog-checklist__text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Beliefs Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Our Philosophy</div>
                    <h2 className="blog-section-title" style={{ maxWidth: '800px', marginBottom: '3rem' }}>What We <em style={{ color: 'var(--kr-red)' }}>Believe In</em></h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Target />, title: 'Function First', desc: 'Spaces that work efficiently before they look good.' },
                            { icon: <Layout />, title: 'Smart Layouts', desc: 'Optimized layouts and storage solutions for daily ease.' },
                            { icon: <ShieldCheck />, title: 'Durability', desc: 'Quality materials that last and are easy to maintain.' },
                            { icon: <Users />, title: 'Transparency', desc: 'Clear communication at every step of the process.' },
                            { icon: <Lightbulb />, title: 'Tailored Design', desc: 'Designs reflecting real lifestyles, not just trends.' },
                            { icon: <Heart />, title: 'Comfort', desc: 'Homes designed for comfort, clarity, and care.' }
                        ].map((item, index) => (
                            <div key={index} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dark Section: Commitment */}
                <div className="blog-dark-section" style={{ textAlign: 'center' }}>
                    <h2 className="blog-section-title" style={{ color: '#fff' }}>Our <em style={{ color: 'var(--kr-gold)' }}>Commitment</em></h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                        We are committed to creating homes that feel calm, functional, and thoughtfully designed. Spaces where everything has a purpose, and nothing feels forced. Because good interiors should make life easier — every single day.
                    </p>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: 'var(--kr-gold)', fontStyle: 'italic' }}>
                        "A home is not a showpiece. It’s a place where life happens."
                    </div>
                </div>

                {/* Design Approach Process */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 className="blog-section-title">Our Design <em style={{ color: 'var(--kr-red)' }}>Approach</em></h2>
                    <div className="blog-process">
                        {[
                            { title: 'Understanding Your Lifestyle', desc: 'We begin by learning how you live, use space, and store things.' },
                            { title: 'Thoughtful Planning', desc: 'Layouts are planned to improve movement, comfort, and functionality.' },
                            { title: 'Material Selection', desc: 'We recommend materials based on durability, usage, and maintenance.' },
                            { title: 'Consistent Language', desc: 'Every room connects visually and functionally with the rest of the home.' },
                            { title: 'Smooth Execution', desc: 'Clear timelines, coordination, and quality checks ensure reliable delivery.' }
                        ].map((step, i) => (
                            <div key={i} className="blog-process__step" style={{ marginBottom: '1.5rem' }}>
                                <div className="blog-process__num">0{i + 1}</div>
                                <div>
                                    <h3 className="blog-process__content-title">{step.title}</h3>
                                    <p className="blog-process__content-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>


        </div>
    );
};

export default AboutUs;
