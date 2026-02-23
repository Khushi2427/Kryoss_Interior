import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import '../blogs/BlogArticle.css';

const reviewsData = [
    {
        name: "Priya Sharma",
        location: "Bren Imperia, Bengaluru",
        text: "KryossInterior has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
    },
    {
        name: "Rahul Verma",
        location: "Goregaon, Mumbai",
        text: "I absolutely loved the work. I would definitely recommend KryossInterior to anyone. They are very professional and made the entire experience amazing. The best part is that they clearly understood our requirements and budget.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80"
    },
    {
        name: "Sneha Reddy",
        location: "Nungambakkam, Chennai",
        text: "Our designer was extremely patient and creative. She gave us multiple options and helped visualize everything in 3D before execution. The quality of materials used is top-notch.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80"
    },
    {
        name: "Amit Desai",
        location: "Baner, Pune",
        text: "Working with Kryoss Interior was a seamless experience. They transformed our space thoughtfully and kept us updated at every phase. The final result feels incredibly luxurious yet functional. The entire process was fully transparent.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1617098474202-0d0d7f60c6ab?w=600&q=80"
    }
];

const Reviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                    alt="Kryoss Reviews"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85))' }}>
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Client <br /><em style={{ color: 'var(--kr-gold)' }}>Stories</em></h1>
                        <p className="blog-hero__subtitle">
                            See what our clients have to say about their journey to a beautifully crafted home with Kryoss Interior.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                <section style={{ margin: '5rem 0 6rem 0' }}>
                    <h2 className="blog-section-title">Happy <em style={{ color: 'var(--kr-red)' }}>Clients</em></h2>
                    <p style={{ color: '#888', maxWidth: '600px', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        We take pride in turning empty spaces into dream homes. Read about the experiences of families who trusted us with their vision.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {reviewsData.map((review, i) => (
                            <div key={i} className="blog-card" style={{ display: 'flex', flexDirection: i % 2 !== 0 ? 'row-reverse' : 'row', flexWrap: 'wrap', overflow: 'hidden' }}>
                                <div style={{ flex: '1 1 400px' }}>
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ flex: '1 1 500px', padding: '3rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', background: 'var(--kr-dark)' }}>
                                    <div style={{ position: 'absolute', top: '2rem', left: i % 2 !== 0 ? 'auto' : '2rem', right: i % 2 !== 0 ? '2rem' : 'auto', color: 'var(--kr-gold)', opacity: 0.4 }}>
                                        <Quote size={80} />
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <p style={{ color: '#eee', fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem' }}>
                                            <span style={{ color: 'var(--kr-gold)', fontSize: '1.4rem' }}>"</span>{review.text}<span style={{ color: 'var(--kr-gold)', fontSize: '1.4rem' }}>"</span>
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '2rem' }}>
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    size={22}
                                                    fill={index < review.rating ? "var(--kr-gold)" : "transparent"}
                                                    stroke={index < review.rating ? "var(--kr-gold)" : "#555"}
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.4rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, letterSpacing: '0.02em' }}>
                                                {review.name}
                                            </h4>
                                            <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                                                {review.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Section */}
                <div className="blog-dark-section" style={{ textAlign: 'center', margin: '4rem 0', padding: '5rem 2rem' }}>
                    <h2 className="blog-section-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>Want to Start <em style={{ color: 'var(--kr-gold)' }}>Your Journey?</em></h2>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                        Join thousands of happy homeowners who have found their dream spaces with Kryoss Interior. Let's create something beautiful together.
                    </p>
                    <a href="/contact-us" style={{
                        display: 'inline-block',
                        background: 'var(--kr-gold)',
                        color: '#000',
                        padding: '1.2rem 2.5rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
