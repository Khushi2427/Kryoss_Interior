import React, { useEffect } from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import Navbar from '../../components/Navbar';
import '../blogs/BlogArticle.css';

const reviewsList = [
    {
        name: "Priya Sharma",
        location: "Bren Imperia, Bengaluru",
        text: "KryossInterior has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80"
    },
    {
        name: "Rahul Verma",
        location: "Goregaon, Mumbai",
        text: "I absolutely loved the work. I would definitely recommend KryossInterior to anyone. They are very professional and made the entire experience amazing. The best part is that they clearly understood our requirements and budget.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
    },
    {
        name: "Sneha Reddy",
        location: "Nungambakkam, Chennai",
        text: "Our designer was extremely patient and creative. She gave us multiple options and helped visualize everything in 3D before execution. The quality of materials used is top-notch.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80"
    },
    {
        name: "Amit Desai",
        location: "Worli, Mumbai",
        text: "The completely transformed our living space. The design elements perfectly blend modern aesthetics with functional utility. The execution team was professional and completed the project on time.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    },
    {
        name: "Anjali Gupta",
        location: "DLF Phase 5, Gurgaon",
        text: "From start to finish, the entire process was seamless. The designers truly understood our vision and brought it to life with incredible attention to detail. Our new kitchen is both beautiful and highly functional.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80"
    }
];

const Reviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            {/* Hero Section */}
            <div className="blog-hero" style={{ minHeight: '600px', height: '60vh' }}>
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
                    alt="Customer Stories"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <span className="blog-hero__tag">Testimonials</span>
                        <h1 className="blog-hero__title">Customer <br /><em style={{ color: 'var(--kr-gold)' }}>Stories</em></h1>
                        <p className="blog-hero__subtitle">
                            Hear from our 10,000+ happy home owners across India about their journey with us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div style={{ textAlign: 'center', margin: '4rem 0 5rem' }}>
                    <h2 className="blog-section-title">Designed for <em style={{ color: 'var(--kr-red)' }}>You</em></h2>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '700px', margin: '0 auto' }}>
                        We believe that a well-designed home elevates everyday living. Read real experiences from homeowners whose spaces we have transformed.
                    </p>
                </div>

                {/* Left/Right Reviews Format */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto 6rem' }}>
                    {reviewsList.map((review, i) => {
                        const isEven = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className="blog-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: isEven ? 'row' : 'row-reverse',
                                    gap: '2.5rem',
                                    padding: '0',
                                    overflow: 'hidden',
                                    alignItems: 'stretch'
                                }}
                            >
                                {/* Review Image */}
                                <div style={{ flex: '1 1 45%', minHeight: '320px', position: 'relative' }}>
                                    <img
                                        src={review.image}
                                        alt={`${review.name}'s Home`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                {/* Review Content */}
                                <div style={{ flex: '1 1 55%', padding: '3.5rem 2.5rem 3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Quote size={40} color="var(--kr-red-light)" style={{ marginBottom: '1rem', opacity: 0.5 }} />

                                    <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                                        {[...Array(review.rating)].map((_, idx) => (
                                            <Star key={idx} size={18} fill="var(--kr-gold)" color="var(--kr-gold)" />
                                        ))}
                                    </div>

                                    <p style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.45rem',
                                        fontWeight: '500',
                                        color: 'var(--kr-slate)',
                                        lineHeight: '1.5',
                                        fontStyle: 'italic',
                                        marginBottom: '2rem'
                                    }}>
                                        "{review.text}"
                                    </p>

                                    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--kr-border)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: 'var(--kr-red)',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'Outfit, sans-serif',
                                            fontWeight: '700',
                                            fontSize: '1.2rem'
                                        }}>
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: '700', color: 'var(--kr-slate)' }}>{review.name}</h4>
                                            <span style={{ fontSize: '0.85rem', color: 'var(--kr-slate-3)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.2rem' }}>
                                                <MapPin size={14} color="var(--kr-red)" /> {review.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="blog-dark-section" style={{ textAlign: 'center', padding: '5rem 3rem' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>
                        Ready to start your <em style={{ color: 'var(--kr-gold)' }}>journey?</em>
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        Join thousands of happy homeowners who trusted us with their dream interiors.
                    </p>
                    <a href="/contact-us" className="blog-hero__cta" style={{ background: '#fff', color: 'var(--kr-red)' }}>
                        Book Free Consultation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
