import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

/**
 * BlogArticleLayout - Premium reusable layout for all blog article pages.
 *
 * Props:
 *  - tag: string (e.g. "Home", "Living")
 *  - title: string
 *  - titleAccent: string (italic accent word)
 *  - subtitle: string
 *  - heroImage: string (URL)
 *  - heroAlt: string
 *  - toc: Array<{ id, label, emoji }>
 *  - sections: Array of section IDs for the dot nav
 *  - children: JSX content
 */
const BlogArticleLayout = ({
    tag,
    title,
    titleAccent,
    subtitle,
    heroImage,
    heroAlt,
    toc = [],
    sections = [],
    children,
}) => {
    const [activeSection, setActiveSection] = useState(sections[0] || '');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const sectionRefs = useRef({});

    // Register section refs
    const registerRef = (id) => (el) => {
        if (el) sectionRefs.current[id] = el;
    };

    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-section');
                        if (id) setActiveSection(id);
                    }
                });
            },
            { threshold: 0.25, rootMargin: '-10% 0px -10% 0px' }
        );
        Object.values(sectionRefs.current).forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = sectionRefs.current[id] || document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="blog-page">
            {/* â"€â"€ HERO â"€â"€ */}
            <div className="blog-hero">
                <img src={heroImage} alt={heroAlt || title} className="blog-hero__image" />
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

            {/* â"€â"€ DOT NAV â"€â"€ */}
            {sections.length > 0 && (
                <nav className="blog-nav-dots" aria-label="Page sections">
                    {sections.map((id) => (
                        <button
                            key={id}
                            className={`blog-nav-dot${activeSection === id ? ' active' : ''}`}
                            onClick={() => scrollTo(id)}
                            aria-label={`Go to ${id}`}
                        />
                    ))}
                </nav>
            )}

            {/* â"€â"€ TOC â"€â"€ */}
            {toc.length > 0 && (
                <div className="blog-body">
                    <div className="blog-toc">
                        <div className="blog-toc__title">Table of Contents</div>
                        <div className="blog-toc__grid">
                            {toc.map((item) => (
                                <button
                                    key={item.id}
                                    className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`}
                                    onClick={() => scrollTo(item.id)}
                                >
                                    {item.emoji && <span>{item.emoji}</span>}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* â"€â"€ CONTENT â"€â"€ */}
            <div className="blog-body">
                {/* Pass registerRef and scrollTo to children via render prop pattern */}
                {typeof children === 'function'
                    ? children({ registerRef, scrollTo, activeSection, expandedFaq, setExpandedFaq })
                    : children}
            </div>
        </div>
    );
};

export default BlogArticleLayout;
