import React, { useState } from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PlayCircle, Calculator, ChevronRight, ChevronLeft, UserCheck, ShieldCheck, ClipboardCheck, CreditCard, Clock, Trophy, Quote } from 'lucide-react';
import '../../components/Features.css';
import '../blogs/BlogArticle.css';
import './Home.css';
import hero from '../../assets/Home/hero.png';
import bedroom from '../../assets/Home/bedroom.png';
import contemporary from '../../assets/Home/contemporary.png';
import full from '../../assets/Home/full.png';
import living from '../../assets/Home/living.png';
import luxury from '../../assets/Home/luxury.png';
import modern from '../../assets/Home/modern.png';
import modular from '../../assets/Home/modular.png';
import plan from '../../assets/Home/plan.png';
import wardrobe from '../../assets/Home/wardrobe.png';
import project1 from '../../assets/Home/project1.png';
import project2 from '../../assets/Home/project2.png';
import project3 from '../../assets/Home/project3.png';

const Home = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            text: "KryossInterior transformed our empty flat into a beautiful home. The team was professional, adhered to timelines, and the finish is simply outstanding. Highly recommended!",
            name: "Rahul & Priya",
            location: "Bangalore"
        },
        {
            text: "The space-saving designs suggested by the architect were brilliant. We now have so much more storage space without compromising on the aesthetics. Great job!",
            name: "Amit Singh",
            location: "Mumbai"
        },
        {
            text: "Transparency in pricing was the best part. No hidden costs, everything was explained upfront. The execution quality is top-notch compared to others.",
            name: "Sneha Gupta",
            location: "Pune"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="blog-page">
            {/* Hero Section - Redesigned with Original Content */}
            <div className="blog-hero">
                <img src={hero} alt="Luxury Interior" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Home Interiors <br /><em style={{ color: 'var(--kr-gold)' }}>Made Easy</em></h1>
                        <p className="blog-hero__subtitle">Transform your living space with expert guidance from 400+ top designers. We handle everything from concept to flawless installation.</p>
                        <div className="hero-cta-group">
                            <Link to="/contact-us" className="hero-btn hero-btn-primary">
                                Book Free Consultation <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                            </Link>
                            <Link to="/projects" className="hero-btn hero-btn-outline">
                                View Recent Projects
                            </Link>
                        </div>
                        {/* Hero Stats Restored */}
                        <div className="hero-stats-group">
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>15,000+</div>
                                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Homes Delivered</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>10 Years</div>
                                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Warranty</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>400+</div>
                                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Design Experts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design Gallery Preview */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Explore Our <em style={{ color: 'var(--kr-red)' }}>Designs</em></h2>
                        <p className="section-subtitle">Curated interiors for every room in your home</p>
                    </div>
                    <div className="grid grid-3 gallery-preview">
                        <Link to="/design-gallery/modular-kitchen-designs" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-container" style={{ height: '250px', overflow: 'hidden' }}>
                                <img src={modular} alt="Modular Kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Modular Kitchens</h3>
                                <div className="link-text" style={{ color: 'var(--kr-red)', display: 'flex', alignItems: 'center', gap: '5px' }}>View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                        <Link to="/design-gallery/bedroom-designs" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-container" style={{ height: '250px', overflow: 'hidden' }}>
                                <img src={bedroom} alt="Bedroom" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Bedroom Designs</h3>
                                <div className="link-text" style={{ color: 'var(--kr-red)', display: 'flex', alignItems: 'center', gap: '5px' }}>View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                        <Link to="/design-gallery/living-room-designs" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-container" style={{ height: '250px', overflow: 'hidden' }}>
                                <img src={living} alt="Living Room" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Living Room Designs</h3>
                                <div className="link-text" style={{ color: 'var(--kr-red)', display: 'flex', alignItems: 'center', gap: '5px' }}>View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: '2.5rem' }}>
                        <Link to="/design-gallery" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem', borderColor: 'var(--kr-slate)', color: 'var(--kr-slate)' }}>View All Designs</Link>
                    </div>
                </div>
            </section>

            {/* Why KryossInterior (Replaces Features Component) */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Why <em style={{ color: 'var(--kr-red)' }}>KryossInterior</em></h2>
                        <p className="section-subtitle">We bring your taste to life with precision and care</p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {[
                            { icon: <UserCheck size={28} color="#fff" />, title: "Personalised for You", desc: "Tell our design experts what makes you tick, and we deliver to your needs." },
                            { icon: <ShieldCheck size={28} color="#fff" />, title: "Quality Guaranteed", desc: "We use KryossInterior gold plywood with a eucalyptus core, naturally termite and borer proof." },
                            { icon: <ClipboardCheck size={28} color="#fff" />, title: "Project Management", desc: "Professional project managers answer your queries and keep the project on time." },
                            { icon: <CreditCard size={28} color="#fff" />, title: "Easy EMI options", desc: "We have partnered with reputable lenders to make your interiors decision easier." },
                            { icon: <Clock size={28} color="#fff" />, title: "On-time Delivery", desc: "With 75% materials factory-made, we ensure a superior finish while keeping timelines." },
                            { icon: <Trophy size={28} color="#fff" />, title: "50+ Design Awards", desc: "Recognized internationally for our innovative and functional interior designs." }
                        ].map((feature, index) => (
                            <div key={index} className="blog-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', minHeight: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <div style={{
                                    width: '60px', height: '60px', background: 'var(--kr-red)', borderRadius: '16px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                                    boxShadow: '0 10px 20px -5px rgba(196, 30, 58, 0.3)'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 className="blog-card__title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--kr-slate-3)', lineHeight: '1.6', flex: 1 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Our <em style={{ color: 'var(--kr-red)' }}>Offerings</em></h2>
                        <p className="section-subtitle">End-to-end interior services tailored for you</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
                            <div className="img-container" style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={full} alt="Full Home" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '2rem', background: '#1a1a1a', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Full Home Interiors</h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>Complete home makeovers including false ceiling, wall treatments, flooring, lighting, and custom furniture tailored to your style.</p>
                                <Link to="/offering/full-home" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Learn More</Link>
                            </div>
                        </div>
                        <div className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
                            <div className="img-container" style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={modular} alt="Modular Kitchens" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '2rem', background: '#1a1a1a', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Modular Kitchens</h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>Ergonomic, functional, and stunning modular kitchens. Choose from L-shaped, U-shaped, parallel, or island kitchens in various finishes.</p>
                                <Link to="/offering/modular-kitchens" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Learn More</Link>
                            </div>
                        </div>
                        <div className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
                            <div className="img-container" style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={wardrobe} alt="Wardrobes" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '2rem', background: '#1a1a1a', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Wardrobes</h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>Maximize your storage with sliding, hinged, or walk-in wardrobes. Multiple internal configurations to suit your specific needs.</p>
                                <Link to="/offering/wardrobes" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculators Banner - Redesigned */}
            <section className="section" style={{ padding: '0' }}>
                <div className="calculator-banner">
                    <img src={plan} alt="Budget" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(3px)', zIndex: 1 }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h2 className="blog-section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff' }}>Plan Your <em style={{ color: '#fff', fontStyle: 'italic' }}>Budget</em></h2>
                            <p className="calculator-banner-subtitle" style={{ fontSize: '1.25rem', marginBottom: '3rem', color: '#fff', lineHeight: '1.8' }}>
                                Get an instant estimate for your home interiors with our accurate, easy-to-use calculators. <br />No hidden costs or surprises.
                            </p>
                            <div className="calculator-btn-group">
                                <Link to="/calculator/home" className="btn" style={{
                                    padding: '1rem 2.5rem',
                                    background: 'rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    display: 'inline-flex', alignItems: 'center', gap: '1rem',
                                    color: '#fff', textDecoration: 'none', borderRadius: '50px',
                                    fontWeight: 600, fontSize: '1.15rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <Calculator size={22} color="#fff" /> Home Calculator
                                </Link>
                                <Link to="/calculator/kitchen" className="btn" style={{
                                    padding: '1rem 2.5rem',
                                    background: 'transparent',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                    display: 'inline-flex', alignItems: 'center', gap: '1rem',
                                    color: '#fff', textDecoration: 'none', borderRadius: '50px',
                                    fontWeight: 600, fontSize: '1.15rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Kitchen Calculator
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Recent <em style={{ color: 'var(--kr-red)' }}>Projects</em></h2>
                        <p className="section-subtitle">Real homes, designed for real people</p>
                    </div>
                    <div className="grid grid-3">
                        <Link to="/projects" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-wrapper" style={{ overflow: 'hidden', height: '250px' }}>
                                <img src={project1} alt="Project 1" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="project-card-content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Modern Villa in Bangalore</h3>
                                <p style={{ color: 'var(--kr-red)', fontSize: '0.9rem', fontWeight: '600' }}>Full Home Interior</p>
                            </div>
                        </Link>
                        <Link to="/projects" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-wrapper" style={{ overflow: 'hidden', height: '250px' }}>
                                <img src={project2} alt="Project 2" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="project-card-content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Luxury Apartment in Mumbai</h3>
                                <p style={{ color: 'var(--kr-red)', fontSize: '0.9rem', fontWeight: '600' }}>Kitchen & Living</p>
                            </div>
                        </Link>
                        <Link to="/projects" className="blog-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="img-wrapper" style={{ overflow: 'hidden', height: '250px' }}>
                                <img src={project3} alt="Project 3" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div className="project-card-content" style={{ padding: '1.5rem', background: '#1a1a1a' }}>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Contemporary Flat in Pune</h3>
                                <p style={{ color: 'var(--kr-red)', fontSize: '0.9rem', fontWeight: '600' }}>Full Home Interior</p>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/projects" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', background: 'var(--kr-red)', border: 'none' }}>See All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Reviews Section - Slider */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Happy <em style={{ color: 'var(--kr-red)' }}>Stories</em></h2>
                        <p className="section-subtitle">Hear from our delighted customers</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                        <div className="blog-card" style={{ padding: '3rem', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--kr-shadow-xl)', position: 'relative', overflow: 'hidden' }}>
                            <Quote size={60} color="var(--kr-red)" style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }} />

                            <div style={{ display: 'flex', color: '#ffb400', marginBottom: '1rem', justifyContent: 'center' }}>
                                <Star fill="#ffb400" size={22} /><Star fill="#ffb400" size={22} /><Star fill="#ffb400" size={22} /><Star fill="#ffb400" size={22} /><Star fill="#ffb400" size={22} />
                            </div>

                            <motion.div
                                key={currentReview}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                style={{ textAlign: 'center', marginTop: '1.5rem' }}
                            >
                                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.4rem', lineHeight: '1.6', color: '#eee', marginBottom: '2rem' }}>
                                    "{reviews[currentReview].text}"
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--kr-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>
                                        {reviews[currentReview].name.charAt(0)}
                                    </div>
                                    <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', marginTop: '0.5rem' }}>{reviews[currentReview].name}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#888' }}>{reviews[currentReview].location}</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Slider Controls */}
                        <button onClick={prevReview} style={{ position: 'absolute', top: '50%', left: '-25px', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'var(--kr-white)', color: 'var(--kr-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--kr-border)', cursor: 'pointer', boxShadow: 'var(--kr-shadow-sm)', transition: 'var(--kr-transition)', zIndex: 10 }} className="slider-btn">
                            <ChevronLeft size={24} />
                        </button>

                        <button onClick={nextReview} style={{ position: 'absolute', top: '50%', right: '-25px', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'var(--kr-white)', color: 'var(--kr-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--kr-border)', cursor: 'pointer', boxShadow: 'var(--kr-shadow-sm)', transition: 'var(--kr-transition)', zIndex: 10 }} className="slider-btn">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <Link to="/reviews" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem', borderColor: 'var(--kr-slate)', color: 'var(--kr-slate)' }}>See All Reviews</Link>
                    </div>
                </div>
            </section>

            {/* Youtube Video Section */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container text-center">
                    <h2 className="blog-section-title">Design <em style={{ color: 'var(--kr-red)' }}>Inspiration</em></h2>
                    <p className="section-subtitle" style={{ color: 'var(--kr-slate-3)' }}>Watch our latest home tours and design tips</p>

                    <div className="video-wrapper">
                        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80" alt="Video Cover" />
                        <Link to="/videos" className="play-button">
                            <PlayCircle size={80} fill="rgba(0,0,0,0.6)" stroke="white" strokeWidth={1} />
                            <span style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Watch Our Story</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA / Booking Form - Redesigned */}
            <section className="section" style={{ background: 'var(--kr-red)', color: 'white', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ color: 'white', fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Ready to Design Your <br /><em>Dream Home?</em></h2>
                        <p style={{ margin: '1rem 0', fontSize: '1.25rem', opacity: 0.9, lineHeight: '1.6' }}>Book a free consultation with our expert designers today. Get personalized designs, rough estimates, and more.</p>
                        <ul style={{ listStyle: 'none', marginTop: '2.5rem', marginBottom: '3rem', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                            {[
                                "400+ Designers",
                                "45-Days Move-in Guarantee",
                                "10 Year Warranty"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 500 }}>
                                    <div style={{ background: 'white', color: 'var(--kr-red)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} fill="var(--kr-red)" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact-us" className="btn" style={{
                            padding: '1rem 3rem', fontSize: '1.2rem',
                            background: '#fff', color: 'var(--kr-red)', fontWeight: '700',
                            borderRadius: '50px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            transition: 'transform 0.2s',
                            display: 'inline-block',
                            border: 'none',
                            textDecoration: 'none'
                        }}>Get Free Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
