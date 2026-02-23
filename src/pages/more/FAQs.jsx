import React from 'react';

const FAQs = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section">
                <h1 className="section-title text-center">Frequently Asked <span className="accent-text">Questions</span></h1>
                <p className="section-subtitle text-center">Find answers to common questions about our services.</p>

                <div style={{ maxWidth: '800px', margin: '3rem auto' }}>
                    <div className="feature-card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <h3>What is the typical timeline for a project?</h3>
                        <p>Most projects are completed within 45-60 days from the design finalization.</p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <h3>Do you offer a warranty?</h3>
                        <p>Yes, we offer up to 10 years of warranty on our woodwork.</p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <h3>Can I customize the designs?</h3>
                        <p>Absolutely! All our designs are fully customizable to your preferences and space.</p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <h3>What is the payment structure?</h3>
                        <p>We have a milestone-based payment structure to ensure transparency and trust.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
