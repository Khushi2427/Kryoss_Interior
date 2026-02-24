import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import videos from '../../assets/more/videos.png';
import '../blogs/BlogArticle.css';
import { PlayCircle, Film } from 'lucide-react';
import luxury from '../../assets/more/more/videos semi images/luxury.jpg';
const Videos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src={videos}
                    alt="Interior Videos"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Our Work in <br /><em style={{ color: 'var(--kr-gold)' }}>Motion</em></h1>
                        <p className="blog-hero__subtitle">
                            See Our Work. Understand Our Process. Experience the Design through our curated video tours.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <h2 className="blog-section-title">Experience the <em style={{ color: 'var(--kr-red)' }}>Design</em></h2>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '700px', margin: '0 auto' }}>
                        Visuals explain better than words. Watch our project walkthroughs and transformational journeys.
                    </p>
                </div>

                {/* Categories */}
                <div className="blog-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {['Project Walkthroughs', 'Before & After', 'Kitchen & Wardrobes', 'Design Tips'].map((cat, i) => (
                        <div key={i} className="blog-card" style={{ padding: '1.5rem', textAlign: 'center', alignItems: 'center' }}>
                            <Film size={24} color="var(--kr-red)" style={{ marginBottom: '0.5rem' }} />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cat}</h3>
                        </div>
                    ))}
                </div>

                {/* Video Grid */}
                <div className="blog-img-grid blog-img-grid--2">
                    {[1, 2, 3, 4].map((v) => (
                        <div key={v} className="blog-img-card">
                            <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                                <img
                                    src={luxury}
                                    alt="Video Thumbnail"
                                    className="blog-img-card__image"
                                />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.4)', transition: 'transform 0.3s' }} className="play-btn">
                                        <PlayCircle size={32} color="#fff" fill="rgba(255,255,255,0.8)" />
                                    </div>
                                </div>
                            </div>
                            <div className="blog-img-card__body">
                                <span className="blog-img-card__tag">Walkthrough</span>
                                <h3 className="blog-img-card__title">Luxury Apartment Tour {v}</h3>
                                <p className="blog-img-card__desc">A complete tour of a 3BHK designed with modern aesthetics.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blog-dark-section" style={{ textAlign: 'center' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2rem', color: '#fff' }}>Real Homes. Real Design.</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>All videos featured here are based on actual projects.</p>
                </div>
            </div>


        </div>
    );
};

export default Videos;
