import React from 'react';

const WhyKryossInterior = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Why <span className="accent-text">KryossInterior</span>?</h1>
                <p className="section-subtitle">What sets us apart from the rest.</p>

                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <h3>Personalized Designs</h3>
                        <p>We tailor every design to your specific needs and lifestyle.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Space Saving Solutions</h3>
                        <p>Our designs give you up to 20% more space in your home.</p>
                    </div>
                    <div className="feature-card">
                        <h3>100% Transparency</h3>
                        <p>No hidden costs. You pay what you see in the quote.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyKryossInterior;
