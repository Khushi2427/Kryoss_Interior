import React from 'react';
import { Star } from 'lucide-react';
import '../../components/Features.css';

const reviews = [
    {
        name: "Priya Sharma",
        location: "Bren Imperia, Bengaluru",
        text: "KryossInterior has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure.",
        rating: 5
    },
    {
        name: "Rahul Verma",
        location: "Goregaon, Mumbai",
        text: "I absolutely loved the work. I would definitely recommend KryossInterior to anyone. They are very professional and made the entire experience amazing. The best part is that they clearly understood our requirements and budget.",
        rating: 5
    },
    {
        name: "Sneha Reddy",
        location: "Nungambakkam, Chennai",
        text: "Our designer was extremely patient and creative. She gave us multiple options and helped visualize everything in 3D before execution. The quality of materials used is top-notch.",
        rating: 4
    }
];

const Reviews = () => {
    return (
        <div className="page-container">
            <div className="section-header text-center" style={{ paddingTop: '8rem' }}>
                <h1 className="section-title">Customer <span className="accent-text">Reviews</span></h1>
                <p className="section-subtitle">See what 10,000+ happy customers have to say</p>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    {reviews.map((review, i) => (
                        <div key={i} className="feature-card review-card">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="#f39c12" stroke="#f39c12" />)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <h4>{review.name}</h4>
                                <span>{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
