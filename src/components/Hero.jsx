import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.jsx.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Home Interiors <br />Made <span className="accent-text italic">Easy</span></h1>
                    <p>Transform your living space with expert guidance from 400+ top designers. We handle everything from concept to flawless installation.</p>
                    <div className="hero-btns">
                        <button className="btn btn-primary">
                            Book Free Consultation <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>
                            View Our Recent Projects
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-num">15,000+</span>
                            <span className="stat-label">Homes Delivered</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">10 Years</span>
                            <span className="stat-label">Warranty</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">400+</span>
                            <span className="stat-label">Design Experts</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
