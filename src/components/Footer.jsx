import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <Link to="/" className="logo footer-logo">
                        <span className="logo-text">Kryoss<span className="accent-text">Interior</span></span>
                    </Link>
                    <p>Founded by experts, KryossInterior is India's most loved interior design company. We transform homes with innovative designs and precision installation.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Design Ideas</h4>
                    <ul>
                        <li><Link to="/design-gallery">Living Room</Link></li>
                        <li><Link to="/design-gallery">Modular Kitchen</Link></li>
                        <li><Link to="/design-gallery">Bedroom</Link></li>
                        <li><Link to="/design-gallery">Bathroom</Link></li>
                        <li><Link to="/design-gallery">Home Office</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/how-it-works">How it Works</Link></li>
                        <li><Link to="/projects">Recent Projects</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/experience-centres">Experience Centers</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+0124-4001495</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>Info@kryosssoftech.org</span>
                    </div>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 KryossInterior. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
