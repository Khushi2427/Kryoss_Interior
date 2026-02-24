import React, { useState } from 'react';
import '../blogs/BlogArticle.css';
import studyRoom from '../../assets/guides/Study Room.jpg';
import studentFocus from '../../assets/guides/Student Focus.jpg';
import designForFlow from '../../assets/guides/Design for Flow.jpg';
import workFromHome from '../../assets/guides/Work from Home.jpg';
import kidsCorner from '../../assets/guides/Kids Corner.jpeg';


const StudyRoom = () => {
  const [activeIdea, setActiveIdea] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const designIdeas = [
    {
      title: "Student Focus",
      icon: '',
      desc: "Designed for long hours of concentration. Features spacious desks for books and devices, reducing clutter.",
      points: ["Spacious desk surface", "Adjustable chair", "Open shelving", "Pin board for notes"],
      img: studentFocus
    },
    {
      title: "Work from Home",
      icon: '',
      desc: "Professional setups that balance comfort with video-call aesthetics. Focuses on ergonomics and cable management.",
      points: ["Cable management", "Ergonomic chair", "Document storage", "Ideal lighting angle"],
      img: workFromHome
    },
    {
      title: "Kids Corner",
      icon: '',
      desc: "A creative yet organized space that grows with the child. Safety and accessibility are key.",
      points: ["Adjustable furniture", "Accessible bins", "Creative wall space", "Soft task lighting"],
      img: kidsCorner
    }
  ];

  const keyElements = [
    { title: "The Desk", icon: '', desc: "Standard height 28-30 inches. Ensure enough depth for laptops and books." },
    { title: "Ergonomics", icon: '', desc: "Invest in a chair with lumbar support to prevent fatigue during long sessions." },
    { title: "Lighting", icon: '', desc: "Position desks perpendicular to windows. Use a warm task lamp (3000K-4000K) for night work." },
    { title: "Storage", icon: '', desc: "Mix open shelves for access and closed cabinets for clutter to maintain a clear mind." },
    { title: "Colours", icon: '', desc: "Soft greys, greens, or whites promote focus. Avoid overly bright reds or oranges using large areas." }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={studyRoom} alt="Peaceful Study" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Study Room<br /><em>Design Guide</em></h1>
            <p className="blog-hero__subtitle">Calm Space. Clear Mind. Better Results. - Focus, Comfort & Productivity.</p>
          </div>
        </div>
      </div>

      <div className="blog-body">

        <section style={{ marginBottom: '6rem' }}>
          <div className="blog-split">
            <div className="blog-image-wrap">
              <img src={designForFlow} alt="Productive Space" />
            </div>
            <div style={{ padding: '2rem 0' }}>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Productivity Core</div>
              <h2 className="blog-section-title">Design for <em style={{ color: 'var(--kr-red)' }}>Flow</em>.</h2>
              <p style={{ lineHeight: 1.8, color: '#aaa', marginBottom: '2rem' }}>
                A thoughtfully planned study space improves concentration and reduces distractions.
                Whether it's for studying or remote work, the environment directly impacts efficiency.
              </p>
              <div className="blog-checklist">
                {["Minimize distraction", "Maximize comfort", "Organize essentials", "Personalize slightly"].map(item => (
                  <div key={item} className="blog-checklist__item">
                    <div className="blog-checklist__icon"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Setup <em style={{ color: '#fff' }}>Options</em></h2>
          <div className="blog-tab-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {designIdeas.map((idea, i) => (
                <button key={i} onClick={() => setActiveIdea(i)} style={{
                  padding: '1.5rem', textAlign: 'left',
                  background: activeIdea === i ? '#1a1a1a' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: activeIdea === i ? '4px solid var(--kr-red)' : '1px solid rgba(255,255,255,0.1)',
                  color: activeIdea === i ? '#fff' : '#888',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{idea.title}</div>
                </button>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={designIdeas[activeIdea].img} alt={designIdeas[activeIdea].title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{designIdeas[activeIdea].icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{designIdeas[activeIdea].title}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1.5rem' }}>{designIdeas[activeIdea].desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {designIdeas[activeIdea].points.map(pt => (
                    <span key={pt} style={{ color: '#fff', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{pt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 className="blog-section-title">Essential <em style={{ color: '#fff' }}>Elements</em></h2>
          <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {keyElements.map((el, i) => (
              <div key={i} className="blog-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{el.icon}</div>
                <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{el.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>{el.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-faq__section">
          <h2 className="blog-section-title">Frequently Asked <em style={{ color: '#fff' }}>Questions</em></h2>
          <div className="blog-faq__list">
            {[
              { q: "How much space is needed for a study room?", a: "Even a small 4-5ft corner works if organized well. Use vertical space with wall-mounted shelves to maximize floor area." },
              { q: "What is the best way to utilize natural light?", a: "Natural light is crucial for mood, but avoid direct glare on screens. Position the desk perpendicular (sideways) to the window." },
              { q: "Should I choose a floating or standing desk?", a: "Floating desks save floor space visually, making rooms feel larger. Standing desks offer ergonomic flexibility but require sturdy installation." }
            ].map((item, i) => (
              <div
                key={i}
                className={`blog-faq__item ${activeFaq === i ? 'open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="blog-faq__question">
                  <span className="blog-faq__question-text">{item.q}</span>
                  <div className="blog-faq__toggle">+</div>
                </div>
                <div
                  className="blog-faq__answer"
                  style={{ display: activeFaq === i ? 'block' : 'none' }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default StudyRoom;