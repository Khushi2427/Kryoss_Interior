import React from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';

const InteriorDesignGuides = () => {

  const roomGuides = [
    {
      title: "Living Room",
      category: "Living Spaces",
      description: "Layout planning, seating arrangements, and lighting techniques for a welcoming space.",
      icon: '',
      link: "/guides/living-room-design-guides",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
    },
    {
      title: "Bedroom",
      category: "Private Spaces",
      description: "Design a relaxing, clutter-free sanctuary with smart wardrobe planning.",
      icon: '',
      link: "/guides/bedroom-design-guides",
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80"
    },
    {
      title: "Modular Kitchen",
      category: "Utility Spaces",
      description: "Storage systems, material choices, and efficient layouts for the heart of your home.",
      icon: '',
      link: "/guides/modular-kitchen-guides",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80"
    },
    {
      title: "Dining Room",
      category: "Gathering Spaces",
      description: "Plan comfortable seating and space flow for meaningful family moments.",
      icon: '',
      link: "/guides/dining-room-design-guides",
      img: "https://images.unsplash.com/photo-1617098474202-0d0d7f60c6ab?w=600&q=80"
    },
    {
      title: "Kids Room",
      category: "Growing Spaces",
      description: "Safe, adaptable, and playful environments that grow with your child.",
      icon: '',
      link: "/guides/kids-room-design-guides",
      img: "https://images.unsplash.com/photo-1584697964403-9f0ef57d4b5f?w=600&q=80"
    },
    {
      title: "Study Room",
      category: "Work Spaces",
      description: "Ergonomics and organization strategies for focus and productivity.",
      icon: '',
      link: "/guides/study-room-design-guides",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&q=80"
    },
    {
      title: "Balcony",
      category: "Outdoor Spaces",
      description: "Transform small outdoor areas into peaceful extensions of your home.",
      icon: '',
      link: "/guides/balcony-design-guides",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
    },
    {
      title: "Bathroom",
      category: "Wet Spaces",
      description: "Moisture-resistant materials and ventilation planning for functional spaces.",
      icon: '',
      link: "/guides/bathroom-design-guides",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"
    }
  ];

  const resourceGuides = [
    {
      title: "Materials & Finishes",
      description: "Learn about Plywood, MDF, Acrylic, and Laminates to make smart investments.",
      icon: '',
      link: "/guides/materials-and-finishes",
      img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80"
    },
    {
      title: "Maintenance Guide",
      description: "Daily and monthly care routines to keep your interiors looking new for years.",
      icon: '',
      link: "/guides/maintenance",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85" alt="Interior Design Guides" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Interior Design<br /><em>Guides</em></h1>
            <p className="blog-hero__subtitle">Your Roadmap to a Perfect Home - Practical, Insightful, Expertly Curated.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>
              <span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Room by Room
            </p>
            <h2 className="blog-section-title">Design <em style={{ color: '#fff' }}>Guides</em></h2>
            <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
              Step-by-step planning advice for every room in your home. From layout to lighting, we cover it all.
            </p>
          </div>

          <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {roomGuides.map((guide, i) => (
              <div key={i} className="blog-card">
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={guide.img} alt={guide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--kr-red)', color: '#fff', padding: '0.25rem 0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {guide.category}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{guide.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{guide.title}</h3>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{guide.description}</p>
                  <Link to={guide.link} style={{ color: 'var(--kr-red)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', textDecoration: 'none', borderBottom: '1px solid var(--kr-red)', paddingBottom: '0.2rem' }}>
                    Read Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <div style={{ padding: '4rem', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 className="blog-section-title">Technical <em style={{ color: '#fff' }}>Resources</em></h2>
            <p style={{ color: '#888', marginBottom: '3rem' }}>Deep dive into materials, finishes, and long-term care.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {resourceGuides.map((guide, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '120px', height: '120px', flexShrink: 0, overflow: 'hidden' }}>
                    <img src={guide.img} alt={guide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{guide.title}</h3>
                    <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>{guide.description}</p>
                    <Link to={guide.link} style={{ color: 'var(--kr-red)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em', textDecoration: 'none' }}>
                      Explore Resource →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="blog-section-title">Common <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq">
            {[
              { q: "Where should I start planning?", a: "Start with the room you not only use the most, but the one that needs the most functional improvement (usually Kitchen or Living Room)." },
              { q: "Are these guides strict rules?", a: "No, they are frameworks. Adapt them to your specific lifestyle, budget, and taste." },
              { q: "Do I need a designer if I read these?", a: "These guides help you collaborate better with designers by making you an informed homeowner. Execution still requires professional expertise." }
            ].map((item, i) => (
              <details key={i} className="blog-faq__item">
                <summary className="blog-faq__question">{item.q}</summary>
                <p className="blog-faq__answer">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default InteriorDesignGuides;