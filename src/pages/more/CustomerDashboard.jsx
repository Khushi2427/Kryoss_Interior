import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import client from '../../assets/more/client.png';
import '../blogs/BlogArticle.css';
import { LayoutDashboard, BarChart2, MessageSquare, CheckCircle, ArrowRight, Lock } from 'lucide-react';

const CustomerDashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src={client}
                    alt="Customer Dashboard"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Track Your <br /><em style={{ color: 'var(--kr-gold)' }}>Project</em></h1>
                        <p className="blog-hero__subtitle">
                            Stay Informed. Feel Confident. Full visibility at every stage of your interior journey.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div className="blog-intro" style={{ textAlign: 'center', padding: '3rem' }}>
                    <h2 className="blog-section-title" style={{ color: '#fff' }}>No Confusion. Just <em style={{ color: 'var(--kr-gold)' }}>Clarity.</em></h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
                        The Customer Dashboard ensures transparency in execution, clear milestone tracking, and organized documentation.
                    </p>
                </div>

                {/* Features Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Features</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>What You Can <em style={{ color: 'var(--kr-red)' }}>Do</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <BarChart2 />, title: 'View Progress', desc: 'Track each stage live from design to installation.' },
                            { icon: <LayoutDashboard />, title: 'Design Updates', desc: 'Review layouts, revisions, and approved concepts.' },
                            { icon: <CheckCircle />, title: 'Milestones', desc: 'See upcoming milestones and completion dates.' },
                            { icon: <MessageSquare />, title: 'Communicate', desc: 'Raise queries and share feedback directly with the team.' }
                        ].map((item, idx) => (
                            <div key={idx} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Login Section */}
                <div className="blog-dark-section" style={{ maxWidth: '600px', margin: '0 auto 6rem', padding: '3rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <Lock size={32} color="var(--kr-gold)" style={{ marginBottom: '1rem' }} />
                        <h2 className="blog-section-title" style={{ color: '#fff', fontSize: '1.8rem' }}>Access Dashboard</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)' }}>Secure login for existing customers.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                        <input type="password" placeholder="Password" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                        <button className="blog-hero__cta" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                            Log In <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CustomerDashboard;
