import React from 'react';
import { motion } from 'framer-motion';
import { User, PenTool, Box, CheckCircle, Truck, MapPin } from 'lucide-react';
import '../../index.css';
import '../../components/Features.css';

const steps = [
    {
        id: "01",
        title: "Meet a designer",
        desc: "Talk to a designer about your needs, dreams and budget. Get an instant estimate and book with KryossInterior by paying 10%.",
        icon: <User size={40} />
    },
    {
        id: "02",
        title: "Let's start designing",
        desc: "Our team measures and assesses your home. Work with your designers to create something amazing and personal. Pay 15%.",
        icon: <PenTool size={40} />
    },
    {
        id: "03",
        title: "View Designs in 3D",
        desc: "Watch your new home come alive in 3D. Sign off on the designs when satisfied, and pay 35%. 60 days to move in*.",
        icon: <Box size={40} />
    },
    {
        id: "04",
        title: "Production begins",
        desc: "While your home is getting built, shop for decor with your designer. Your designs are ready to be shipped in 45 days. Pay balance 40%.",
        icon: <CheckCircle size={40} />
    },
    {
        id: "05",
        title: "Move-In",
        desc: "Our team will bring your home to life in 15 days. Move in and start living your dream with our 25-year warranty.",
        icon: <Truck size={40} />
    }
];

const HowItWorks = () => {
    return (
        <div className="page-container">
            <div className="section-header text-center" style={{ paddingTop: '8rem' }}>
                <h1 className="section-title">How It <span className="accent-text">Works</span></h1>
                <p className="section-subtitle">Your dream home in 5 simple steps</p>
            </div>

            <div className="container section">
                <div className="timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-content feature-card">
                                <div className="step-number">{step.id}</div>
                                <div className="feature-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="section" style={{ background: 'var(--surface)' }}>
                <div className="container text-center">
                    <h2>The Project Team</h2>
                    <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Get to know the team that'll be with you every step of the way</p>
                    <div className="grid grid-3">
                        <div className="feature-card">
                            <h3>Personal Designer</h3>
                            <p>Your creative partner who brings your vision to life.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Project Manager</h3>
                            <p>Ensures timely delivery and quality execution.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Customer Happiness Manager</h3>
                            <p>Dedicated support for a seamless experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
