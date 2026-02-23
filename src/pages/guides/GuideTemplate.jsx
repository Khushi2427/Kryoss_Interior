import React from 'react';
import '../blogs/BlogArticle.css';

const GuideTemplate = ({ title = "New Guide", subtitle = "Your Roadmap to a Perfect Space", category = "Interior" }) => {
    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85" alt={title} className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">{title}<br /><em>Guide</em></h1>
                        <p className="blog-hero__subtitle">{subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>
                            {category} Series
                        </div>
                        <h2 className="blog-section-title">Design <em style={{ color: '#fff' }}>Insights</em></h2>
                    </div>

                    <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className="blog-card" style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Getting Started with {category}</h3>
                            <p style={{ color: '#888', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Essential tips and tricks for planning your perfect {category.toLowerCase()}.
                                Learn the basics before you begin.
                            </p>
                            <button style={{
                                background: 'transparent', border: '1px solid var(--kr-red)',
                                color: '#fff', padding: '0.5rem 1rem', textTransform: 'uppercase',
                                letterSpacing: '0.1em', cursor: 'pointer'
                            }}>Read Article</button>
                        </div>

                        <div className="blog-card" style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Top Trends in {category}</h3>
                            <p style={{ color: '#888', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Discover the latest design trends for {category.toLowerCase()} in 2026.
                                Stay ahead of the curve.
                            </p>
                            <button style={{
                                background: 'transparent', border: '1px solid var(--kr-red)',
                                color: '#fff', padding: '0.5rem 1rem', textTransform: 'uppercase',
                                letterSpacing: '0.1em', cursor: 'pointer'
                            }}>Read Article</button>
                        </div>

                        <div className="blog-card" style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>{category} Layout Ideas</h3>
                            <p style={{ color: '#888', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Maximize space and functionality with these expert layout suggestions.
                                Optimize every inch.
                            </p>
                            <button style={{
                                background: 'transparent', border: '1px solid var(--kr-red)',
                                color: '#fff', padding: '0.5rem 1rem', textTransform: 'uppercase',
                                letterSpacing: '0.1em', cursor: 'pointer'
                            }}>Read Article</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GuideTemplate;
