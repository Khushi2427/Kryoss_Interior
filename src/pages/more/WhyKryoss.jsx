import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

import '../blogs/BlogArticle.css';
import { Home, Layout, ShieldCheck, Clock, Smile, Heart, CheckSquare } from 'lucide-react';

const WhyKryoss = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80"
                    alt="Comfortable Living"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Good Design Makes Life <br /><em style={{ color: 'var(--kr-gold)' }}>Easier</em></h1>
                        <p className="blog-hero__subtitle">
                            Design that supports life, not interrupts it. Practical, organized, and comfortable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro Split */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src="https://images.unsplash.com/photo-1588854337440-adbf8649cc74?auto=format&fit=crop&q=80" alt="Family Living" />
                    </div>
                    <div>
                        <div className="section-label">Real Living</div>
                        <h2 className="blog-section-title">Design for <br /><em>Everyday</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            We don’t design homes in isolation. We design around how people actually live — understanding daily routines, planning storage based on usage, and creating layouts that feel natural.
                        </p>
                        <div className="blog-checklist">
                            {['Function before decoration', 'Smart use of space', 'Easy maintenance', 'Clutter-free environments'].map((item, i) => (
                                <div key={i} className="blog-checklist__item">
                                    <div className="blog-checklist__icon"><CheckSquare size={14} color="#fff" /></div>
                                    <span className="blog-checklist__text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Pillars Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Our Pillars</div>
                    <h2 className="blog-section-title">Why Choose <em style={{ color: 'var(--kr-red)' }}>Kryoss?</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        {[
                            { icon: <Layout />, title: 'Function First', desc: 'Smart space planning comes first. Aesthetics never cost usability.' },
                            { icon: <ShieldCheck />, title: 'Transparent Planning', desc: 'Clear costs, realistic timelines, and honest recommendations.' },
                            { icon: <Home />, title: 'Durable Materials', desc: 'Moisture-resistant, easy-to-maintain finishes built for long-term comfort.' },
                            { icon: <Clock />, title: 'Structured Process', desc: 'Organized workflow with quality checks at every stage.' },
                            { icon: <Smile />, title: 'Indian Lifestyle', desc: 'Designed for local living conditions, space constraints, and family dynamics.' },
                            { icon: <Heart />, title: 'Customer Care', desc: 'We stay with you even after the project is handed over.' },
                        ].map((item, i) => (
                            <div key={i} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Promise */}
                <div className="blog-dark-section" style={{ textAlign: 'center' }}>
                    <h3 className="blog-section-title" style={{ color: '#fff' }}>The Kryoss Promise</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Interior design shouldn’t feel overwhelming. It should feel thoughtful and reassuring. If you’re looking for interiors that are easy to live with, we are built for exactly that.
                    </p>
                </div>

            </div>


        </div>
    );
};

export default WhyKryoss;
