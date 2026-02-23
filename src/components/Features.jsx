import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, ShieldCheck, Clock, CreditCard, Award } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <MessageSquare size={32} />,
        title: "Personalised for You",
        desc: "Tell our design experts what makes you tick, and we deliver to your needs."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Quality Guaranteed",
        desc: "We use KryossInterior gold plywood with a eucalyptus core, naturally termite and borer proof."
    },
    {
        icon: <Layout size={32} />,
        title: "Project Management",
        desc: "Professional project managers answer your queries and keep the project on time."
    },
    {
        icon: <CreditCard size={32} />,
        title: "Easy EMI options",
        desc: "We have partnered with reputable lenders to make your interiors decision easier."
    },
    {
        icon: <Clock size={32} />,
        title: "On-time Delivery",
        desc: "With 75% materials factory-made, we ensure a superior finish while keeping timelines."
    },
    {
        icon: <Award size={32} />,
        title: "50+ Design Awards",
        desc: "Recognized internationally for our innovative and functional interior designs."
    }
];

const Features = () => {
    return (
        <section id="how-it-works" className="section features-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Why <span className="accent-text">KryossInterior</span></h2>
                    <p className="section-subtitle">We bring your taste to life with precision and care</p>
                </div>

                <div className="grid grid-3 features-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="feature-card"
                        >
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
