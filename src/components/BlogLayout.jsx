import React from 'react';
import '../pages/blogs/BlogArticle.css';
import { Link } from 'react-router-dom';

const BlogLayout = ({ title, subtitle, tag, heroImage, children }) => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '6.5rem', background: '#ffffff' }}>
            <div className="container">
                <section className="hero-wrapper" style={{ marginBottom: '2.5rem' }}>
                    <img src={heroImage} alt="banner" className="hero-image" style={{ height: '520px' }} />
                    <div className="hero-overlay">
                        <div style={{ maxWidth: '900px' }}>
                            <span className="hero-badge" style={{ background: '#dc2626' }}>{tag}</span>
                            <h1 className="blog-title" style={{ fontSize: '2.8rem', marginTop: '0.75rem', color: '#ffffff' }}>{title}</h1>
                            {subtitle && <p className="blog-subtitle" style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>{subtitle}</p>}
                            <div style={{ marginTop: '1.25rem' }}>
                                <Link to="/contact-us" className="cta-button">Book Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;
