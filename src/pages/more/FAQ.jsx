import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../blogs/BlogArticle.css';
import { HelpCircle, DollarSign, Clock, PenTool } from 'lucide-react';

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            category: 'General Questions',
            icon: <HelpCircle size={24} />,
            items: [
                { q: 'What services do you offer?', a: 'Full home interiors, modular kitchens, custom wardrobes, and space planning.' },
                { q: 'Do you handle complete home interiors?', a: 'Yes, we execute complete home interiors ensuring consistent themes.' },
                { q: 'Is customization possible?', a: 'Absolutely. Every project is customized based on your space, storage needs, and lifestyle preferences.' }
            ]
        },
        {
            category: 'Pricing & Budget',
            icon: <DollarSign size={24} />,
            items: [
                { q: 'How is cost calculated?', a: 'Pricing depends on area size, material selection, storage requirements, and level of customization.' },
                { q: 'Do you offer budget-friendly options?', a: 'Yes. We offer different material and finish categories to suit varying budgets without compromising structural durability.' }
            ]
        },
        {
            category: 'Timeline & Execution',
            icon: <Clock size={24} />,
            items: [
                { q: 'How long does a project take?', a: 'On average, 6–10 weeks depending on size and scope. Timelines are discussed upfront.' },
                { q: 'Do you provide a timeline?', a: 'Yes. A structured timeline is shared before execution begins.' }
            ]
        },
        {
            category: 'Design Process',
            icon: <PenTool size={24} />,
            items: [
                { q: 'What is your design process?', a: 'We start with requirement understanding, move to layout planning, then material selection, and finally execution.' },
                { q: 'Can I see designs before execution?', a: 'Yes. 2D layouts and 3D concepts are finalized before production begins.' }
            ]
        }
    ];

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                    alt="FAQ Discussion"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <span className="blog-hero__tag">Support</span>
                        <h1 className="blog-hero__title">Frequently Asked <br /><em style={{ color: 'var(--kr-gold)' }}>Questions</em></h1>
                        <p className="blog-hero__subtitle">
                            Clear Answers. No Confusion. Everything you need to know about working with us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="blog-section-title">Your <em style={{ color: 'var(--kr-red)' }}>Clarity</em> Matters</h2>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '700px', margin: '0 auto' }}>
                        Planning interiors brings many questions. Here are the answers to help you decide with confidence.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="blog-faq__section" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
                    {faqs.map((cat, i) => (
                        <div key={i} style={{ marginBottom: '4rem' }}>
                            <h3 className="blog-section-title" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--kr-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                                <span style={{ color: 'var(--kr-red)' }}>{cat.icon}</span> {cat.category}
                            </h3>
                            <div className="blog-faq__list">
                                {cat.items.map((item, j) => {
                                    const index = i * 10 + j; // Unique index
                                    return (
                                        <div
                                            key={j}
                                            className={`blog-faq__item ${activeFaq === index ? 'open' : ''}`}
                                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                        >
                                            <div className="blog-faq__question">
                                                <span className="blog-faq__question-text">{item.q}</span>
                                                <div className="blog-faq__toggle" style={{ transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</div>
                                            </div>
                                            <div
                                                className="blog-faq__answer"
                                                style={{ display: activeFaq === index ? 'block' : 'none' }}
                                            >
                                                {item.a}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="blog-dark-section" style={{ textAlign: 'center' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2rem', color: '#fff' }}>Still have questions?</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                        If you don’t find your answer here, feel free to reach out.
                    </p>
                    <a href="/contact-us" className="blog-hero__cta" style={{ background: '#fff', color: 'var(--kr-red)' }}>
                        Contact Us
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQ;
