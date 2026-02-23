import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MapPin, Phone, Navigation } from 'lucide-react';
import '../blogs/BlogArticle.css';
import banner from '../../assets/experience/banner.png';
import gurgoan from '../../assets/experience/gurgoan.png';
import ouroffice from '../../assets/experience/ouroffice.png';
import pune from '../../assets/experience/pune.png';
const centers = [
    {
        city: 'Gurgaon',
        name: 'JMD Megapolis',
        address: '1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India',
        phone: '+0124-4001495',
        map: gurgoan
    },
    {
        city: 'Gurgaon',
        name: 'Spaze IT Park',
        address: '348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India',
        phone: '+0124-4001298',
        map: ouroffice
    },
    {
        city: 'Pune',
        name: 'Pune IT Park',
        address: 'C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune - 411020, Maharashtra, India',
        phone: '+91-020-411208',
        map: pune
    },
];

const ExperienceCenters = () => {
    const [searchParams] = useSearchParams();
    const cityParam = searchParams.get('city');

    const filteredCenters = cityParam
        ? centers.filter(center => center.city.toLowerCase() === cityParam.toLowerCase())
        : centers;

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={banner} alt="Experience Centres" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Our <br /><em>Offices</em></h1>
                        <p className="blog-hero__subtitle">
                            {cityParam ? `Visit us in ${cityParam}` : 'Come meet us to discuss your dream project.'}
                        </p>
                        {cityParam && (
                            <Link to="/experience-centres" style={{
                                display: 'inline-block', marginTop: '1.5rem',
                                color: '#fff', borderBottom: '1px solid var(--kr-red)',
                                paddingBottom: '0.25rem', textDecoration: 'none'
                            }}>View All Locations</Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="blog-body" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
                {filteredCenters.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {filteredCenters.map((center, i) => (
                            <div key={i} className="experience-center-row" style={{
                                display: 'flex',
                                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                                alignItems: 'center',
                                gap: '3rem',
                                flexWrap: 'wrap'
                            }}>
                                <div className="center-content" style={{ flex: '1 1 500px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ padding: '0.8rem', background: 'rgba(196, 30, 58, 0.1)', borderRadius: '50%', color: 'var(--kr-red)' }}>
                                            <MapPin size={24} />
                                        </div>
                                        <h2 style={{ fontSize: '2rem', color: '#333' }}>{center.city}</h2>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#555' }}>{center.name}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '1.5rem' }}>
                                        Visit our state-of-the-art office in {center.city} to experience our latest designs and technology solutions.
                                        Our experts are ready to guide you through your project journey. <strong>Book a visit today for 2 hours of free consulting.</strong>
                                    </p>

                                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '12px', borderLeft: '4px solid var(--kr-red)' }}>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}><strong>Address:</strong><br />{center.address}</p>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}><strong>Phone:</strong> <br /><a href={`tel:${center.phone}`} style={{ color: 'var(--kr-red)' }}>{center.phone}</a></p>
                                        <p style={{ fontWeight: 500 }}><strong>Email:</strong> <br /><a href="mailto:Info@kryosssoftech.org" style={{ color: 'var(--kr-red)' }}>Info@kryosssoftech.org</a></p>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Link to="/contact-us" style={{
                                            background: 'var(--kr-red)', color: '#fff', padding: '0.8rem 1.5rem',
                                            borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            fontSize: '1rem', border: 'none', cursor: 'pointer', textDecoration: 'none'
                                        }}>
                                            <Phone size={18} /> Book Consultation
                                        </Link>
                                        <a href={center.map} target="_blank" rel="noopener noreferrer" style={{
                                            background: 'transparent', border: '1px solid #333', color: '#333',
                                            padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            fontSize: '1rem', cursor: 'pointer', textDecoration: 'none'
                                        }}>
                                            <Navigation size={18} /> Get Directions
                                        </a>
                                    </div>
                                </div>

                                <div className="center-image" style={{ flex: '1 1 500px', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                    <img
                                        src={i === 0 ? ouroffice :
                                            i === 1 ? gurgoan :
                                            pune}
                                        alt={`${center.city} Office`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
                        <h3 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '1rem' }}>No offices found in {cityParam}.</h3>
                        <p>We are expanding soon!</p>
                        <a href="/experience-centres" style={{ color: 'var(--kr-red)', marginTop: '1rem', display: 'inline-block' }}>View All Locations</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCenters;
