import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import studyRoom from '../../assets/blogs/Study Room.jpg';

const studyIdeas = [
  { icon: '', title: 'Task Lighting', desc: 'A dedicated desk lamp with adjustable brightness reduces eye strain and improves focus during long study sessions.', image: 'https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=600&q=80' },
  { icon: '', title: 'Ergonomic Workstation', desc: 'An adjustable chair and desk at the correct height prevent back pain and improve posture for hours of productive work.', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80' },
  { icon: '', title: 'Built-in Bookshelves', desc: 'Floor-to-ceiling bookshelves keep books, files, and reference materials organized and within easy reach.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
  { icon: '', title: 'Acoustic Panels', desc: 'Sound-absorbing panels on walls reduce noise distractions and create a quieter, more focused work environment.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { icon: '', title: 'Cable Management', desc: 'Concealed cable channels and built-in power points keep the desk area tidy and free from distracting clutter.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80' },
  { icon: '', title: 'Biophilic Accents', desc: 'A small plant or two on the desk improves air quality, reduces stress, and boosts creativity and productivity.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
];

const faqs = [
  { q: 'What is the ideal study room layout?', a: 'Position the desk near a window for natural light, but avoid direct glare on the screen. Ensure the chair faces away from the door to minimize distractions. Keep frequently used items within arm\'s reach.' },
  { q: 'What colour is best for a study room?', a: 'Cool, calming colours like soft blue, sage green, and warm white promote focus and concentration. Avoid overly bright or stimulating colours that can be distracting.' },
  { q: 'How do I reduce noise in a home study room?', a: 'Use acoustic panels, heavy curtains, a thick rug, and bookshelves filled with books to absorb sound. Solid-core doors and weatherstripping also help reduce noise from other parts of the home.' },
  { q: 'What lighting is best for a study room?', a: 'Use a combination of ambient lighting (ceiling lights), task lighting (desk lamp), and accent lighting. LED lights with a colour temperature of 4000-5000K (cool white) are ideal for focus and concentration.' },
];

const StudyRoomDesign = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const refs = useRef({});
  const reg = (id) => (el) => { if (el) refs.current[id] = el; };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    );
    Object.values(refs.current).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = refs.current[id] || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navSections = ['intro', 'ideas', 'styles', 'faq', 'cta'];
  const toc = [
    { id: 'ideas', label: 'Design Ideas', emoji: '' },
    { id: 'styles', label: 'Study Styles', emoji: '' },
    { id: 'faq', label: 'FAQs', emoji: '' },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src={studyRoom} alt="Study Room Design" className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Study Room Design Ideas for <em>Maximum Productivity</em></h1>
            <p className="blog-hero__subtitle">Create a focused, inspiring workspace at home - whether for work, study, or creative pursuits.</p>
            <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
              Explore Ideas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
      </div>

      <nav className="blog-nav-dots">
        {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
      </nav>

      <div className="blog-body">
        <div className="blog-toc">
          <div className="blog-toc__title">Table of Contents</div>
          <div className="blog-toc__grid">
            {toc.map(item => <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}><span>{item.emoji}</span>{item.label}</button>)}
          </div>
        </div>

        {/* INTRO */}
        <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-intro">
            <div className="blog-intro-grid">
              <div>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>The Study Room</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Your Personal Space for Focus and Creativity</h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  A dedicated study room or home office is no longer a luxury - it is a necessity. The right design can significantly improve your focus, productivity, and overall well-being.
                </p>
                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                  <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design study rooms that inspire deep work and creative thinking.</p>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="blog-intro__stat">40%</div>
                <p className="blog-intro__stat-label">Increase in productivity with a well-designed home workspace</p>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE BANNER */}
        <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
          <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80" alt="Home Office - Kryoss Interior" />
          <div className="blog-wide-image__caption">Premium Home Office Design â€¢ Kryoss Interior</div>
        </div>

        {/* IDEAS */}
        <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Study Room <em>Design Ideas</em></h2>
          <div className="blog-img-grid">
            {studyIdeas.map((idea, i) => (
              <div key={i} className="blog-img-card">
                <img src={idea.image} alt={idea.title} className="blog-img-card__image" />
                <div className="blog-img-card__body">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{idea.icon}</div>
                  <h3 className="blog-img-card__title">{idea.title}</h3>
                  <p className="blog-img-card__desc">{idea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPLIT: HOME OFFICE */}
        <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="blog-split">
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Home Office</div>
              <h2 className="blog-section-title">Professional <em>Home Office Design</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A professional home office needs to inspire confidence during video calls while providing a distraction-free environment for deep work.
              </p>
              <div className="blog-checklist">
                {['L-shaped desk for ample workspace', 'Built-in shelving for books and files', 'Professional video call background', 'Ergonomic chair with lumbar support', 'Dual monitor setup with cable management'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80" alt="Home Office Design" />
            </div>
          </div>

          <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
            <div>
              <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Student Study Room</div>
              <h2 className="blog-section-title">Focused <em>Student Study Room</em></h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A student study room needs to balance focus and comfort. Good lighting, organized storage, and a distraction-free environment are essential for academic success.
              </p>
              <div className="blog-checklist">
                {['Wide desk with ample writing space', 'Dedicated book storage and file organization', 'Pinboard or whiteboard for notes', 'Good task lighting to reduce eye strain', 'Comfortable chair for long study sessions'].map((item, i) => (
                  <div key={i} className="blog-checklist__item">
                    <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <span className="blog-checklist__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-image-wrap" style={{ height: '480px' }}>
              <img src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=900&q=80" alt="Student Study Room" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
          <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
          <div className="blog-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                <div className="blog-faq__question">
                  <span className="blog-faq__question-text">{faq.q}</span>
                  <span className="blog-faq__toggle">+</span>
                </div>
                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Design Your Perfect <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Study Room</em></h2>
          <p className="blog-cta-section__subtitle">Let our experts create a workspace that inspires focus, creativity, and productivity every day.</p>
          <Link to="/contact" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyRoomDesign;
