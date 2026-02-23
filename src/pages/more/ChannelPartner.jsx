import React from 'react';

const ChannelPartner = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Channel Partner <span className="accent-text">Signup/Login</span></h1>
                <p className="section-subtitle">Partner with us and grow your business.</p>
                <div style={{ maxWidth: '400px', margin: '3rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Partner Login</h3>
                    <input type="email" placeholder="Partner Email" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="password" placeholder="Password" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <button className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>New? <a href="#" style={{ color: 'var(--primary-color)' }}>Register as a Partner</a></p>
                </div>
            </div>
        </div>
    );
};

export default ChannelPartner;
