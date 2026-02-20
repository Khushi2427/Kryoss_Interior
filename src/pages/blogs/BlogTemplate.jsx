import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

/**
 * BlogTemplate - Generic template for blog category pages.
 * Used as a fallback for pages without custom content.
 */
const BlogTemplate = ({ title, titleAccent, subtitle, tag, heroImage, articles = [] }) => {
    return (
        <div className="blog-page">
            {/* HERO */}
            <div className="blog-hero">
                <img
                    src={heroImage || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80'}
                    alt={title}
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">
                            {title} {titleAccent && <em>{titleAccent}</em>}
                        </h1>
                        {subtitle && <p className="blog-hero__subtitle">{subtitle}</p>}
                        <Link to="/contact-us" className="blog-hero__cta">
                            Book Free Consultation
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="blog-hero__scroll">
                    <div className="blog-hero__scroll-line" />
                    <span>Scroll</span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="blog-body" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                {articles.length > 0 && (
                    <section style={{ marginBottom: '5rem' }}>
                        <div className="section-label">
                            <span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>
                            Featured Articles
                        </div>
                        <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>
                            Explore Our <em>Articles</em>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {articles.map((article, i) => (
                                <Link
                                    key={i}
                                    to={article.link || '#'}
                                    style={{
                                        position: 'relative',
                                        height: '300px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        display: 'block',
                                        textDecoration: 'none',
                                        transition: 'var(--kr-transition)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = 'var(--kr-shadow-xl)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                            {article.title}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600 }}>
                                            <span>Read More</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <div className="blog-cta-section">
                    <h2 className="blog-cta-section__title">Ready to Design Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dream Home?</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts guide you through every step - from concept to completion.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">
                        Get a Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogTemplate;
