import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="container footer-premium__grid">

                {/* Brand Column */}
                <div className="footer-premium__col footer-premium__brand">
                    <Link to="/" className="footer-premium__logo">
                        <span>Kryoss</span><span style={{ color: 'var(--kr-gold)' }}>Interior</span>
                    </Link>
                    <p className="footer-premium__desc">
                        Founded by design experts, Kryoss Interior is transforming Indian homes with an unparalleled blend of luxury, clarity, and flawless execution.
                    </p>
                    <div className="footer-premium__socials">
                        <a href="#"><Facebook size={18} /></a>
                        <a href="#"><Instagram size={18} /></a>
                        <a href="#"><Twitter size={18} /></a>
                        <a href="#"><Linkedin size={18} /></a>
                    </div>
                </div>

                {/* Ideas Column */}
                <div className="footer-premium__col">
                    <h4 className="footer-premium__title">Design <em style={{ color: 'var(--kr-gold)' }}>Ideas</em></h4>
                    <ul className="footer-premium__links">
                        <li><Link to="/design-gallery">Living Room</Link></li>
                        <li><Link to="/design-gallery">Modular Kitchen</Link></li>
                        <li><Link to="/design-gallery">Bedroom</Link></li>
                        <li><Link to="/design-gallery">Bathroom</Link></li>
                        <li><Link to="/design-gallery">Home Office</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-premium__col">
                    <h4 className="footer-premium__title">The <em style={{ color: 'var(--kr-gold)' }}>Brand</em></h4>
                    <ul className="footer-premium__links">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/how-it-works">How it Works</Link></li>
                        <li><Link to="/projects">Recent Projects</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/experience-centres">Experience Centers</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-premium__col">
                    <h4 className="footer-premium__title">Get in <em style={{ color: 'var(--kr-gold)' }}>Touch</em></h4>
                    <div className="footer-premium__contact-list">
                        <div className="footer-premium__contact-item">
                            <Phone size={18} color="var(--kr-red)" />
                            <span>+0124-4001495</span>
                        </div>
                        <div className="footer-premium__contact-item">
                            <Mail size={18} color="var(--kr-red)" />
                            <span>Info@kryosssoftech.org</span>
                        </div>
                        <div className="footer-premium__contact-item" style={{ alignItems: 'flex-start' }}>
                            <MapPin size={18} color="var(--kr-red)" style={{ marginTop: '4px' }} />
                            <span>1102, 11th Floor, JMD Megapolis,<br />Sec-48, Gurgaon-122018,<br />Haryana, India</span>
                        </div>
                    </div>

                    <Link to="/contact-us" className="footer-premium__cta">
                        Book Consultation <ArrowRight size={16} />
                    </Link>
                </div>

            </div>

            <div className="footer-premium__bottom">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>&copy; 2026 KryossInterior. All rights reserved.</p>
                    <div className="footer-premium__legal">
                        <Link to="#">Privacy Policy</Link>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
