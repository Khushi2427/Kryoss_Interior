import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col footer-brand">
                    <Link to="/" className="footer-logo">
                        <span>Kryoss</span><span style={{ color: 'var(--kr-gold)' }}>Interior</span>
                    </Link>
                    <p className="footer-desc">
                        Founded by design experts, Kryoss Interior is transforming Indian homes with an unparalleled blend of luxury, clarity, and flawless execution.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><Facebook size={18} /></a>
                        <a href="#"><Instagram size={18} /></a>
                        <a href="#"><Twitter size={18} /></a>
                        <a href="https://www.linkedin.com/company/kryoss-interiors/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Design Ideas</h4>
                    <ul className="footer-links">
                        <li><Link to="/design-gallery">Living Room</Link></li>
                        <li><Link to="/design-gallery">Modular Kitchen</Link></li>
                        <li><Link to="/design-gallery">Bedroom</Link></li>
                        <li><Link to="/design-gallery">Bathroom</Link></li>
                        <li><Link to="/design-gallery">Home Office</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Company</h4>
                    <ul className="footer-links">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/how-it-works">How it Works</Link></li>
                        <li><Link to="/projects">Recent Projects</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/experience-centres">Experience Centers</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contact Us</h4>
                    <div className="footer-contact">
                        <div className="contact-item">
                            <Phone size={16} color="var(--kr-gold)" />
                            <span>+0124-4001495</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={16} color="var(--kr-gold)" />
                            <span>Info@kryosssoftech.org</span>
                        </div>
                        <div className="contact-item" style={{ alignItems: 'flex-start' }}>
                            <MapPin size={16} color="var(--kr-gold)" style={{ marginTop: '4px' }} />
                            <span>1102, 11th Floor, JMD Megapolis,<br />Sec-48, Gurgaon-122018,<br />Haryana, India</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>&copy; 2026 KryossInterior. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
