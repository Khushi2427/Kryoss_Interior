import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavDropdown = ({ title, items, path, cols = 1, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when location changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div
      className="nav-item-dropdown group"
      onMouseEnter={() => window.innerWidth > 1024 && setOpen(true)}
      onMouseLeave={() => window.innerWidth > 1024 && setOpen(false)}
    >
      {path ? (
        <a
          href={path}
          className="nav-link-text flex items-center gap-1"
          onClick={(e) => {
            if (window.innerWidth <= 1024 && items.length > 0) {
              e.preventDefault();
              setOpen(!open);
            } else {
              setIsOpen(false);
            }
          }}
        >
          {title}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        </a>
      ) : (
        <span
          className="nav-link-text flex items-center gap-1"
          onClick={(e) => {
            if (window.innerWidth <= 1024) {
              e.preventDefault();
              setOpen(!open);
            }
          }}
        >
          {title}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        </span>
      )}

      <div
        className={`dropdown-menu ${open ? "show" : ""}`}
        style={
          cols > 1 && window.innerWidth > 1024
            ? {
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              width: cols === 2 ? "520px" : "720px",
              gap: "0.5rem",
            }
            : {}
        }
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="dropdown-item"
            onClick={() => {
              setOpen(false);
              setIsOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navClass = `navbar ${scrolled ? 'scrolled' : ''}`;

  return (
    <nav className={navClass}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Kryoss<span className="accent-text">Interior</span></span>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>

          <NavDropdown title="Design Gallery" path="/design-gallery" cols={2} setIsOpen={setIsOpen} items={[
            { label: 'Modular Kitchen Designs', path: '/design-gallery/modular-kitchen-designs' },
            { label: 'Customise Your Kitchen', path: '/design-gallery/customise-your-kitchen' },
            { label: 'Wardrobe Designs', path: '/design-gallery/wardrobe-designs' },
            { label: 'Bedroom Designs', path: '/design-gallery/bedroom-designs' },
            { label: 'Living Room Designs', path: '/design-gallery/living-room-designs' },
            { label: 'Space Saving Designs', path: '/design-gallery/space-saving-designs' },
            { label: 'Dining Room Designs', path: '/design-gallery/dining-room-designs' },
            { label: 'Home Office Designs', path: '/design-gallery/home-office-designs' },
            { label: 'Kids Bedroom Designs', path: '/design-gallery/kids-bedroom-designs' },
            { label: 'Bathroom Designs', path: '/design-gallery/bathroom-designs' },
            { label: '1 BHK Interior Designs', path: '/design-gallery/1-bhk-interior-designs' },
            { label: '2 BHK Interior Designs', path: '/design-gallery/2-bhk-interior-designs' },
            { label: '3 BHK Interior Designs', path: '/design-gallery/3-bhk-interior-designs' }
          ]} />

          <Link to="/projects" className="nav-link-text" onClick={() => setIsOpen(false)}>Recent Projects</Link>

          <NavDropdown title="Cost Calculators" setIsOpen={setIsOpen} items={[
            { label: 'Kitchen Cost Calculator', path: '/calculator/kitchen' },
            { label: 'Wardrobe Cost Calculator', path: '/calculator/wardrobe' },
            { label: 'Full Home Cost Calculator', path: '/calculator/home' }
          ]} />

          <NavDropdown title="Offering" setIsOpen={setIsOpen} items={[
            { label: 'Full Home Interiors', path: '/offering/full-home' },
            { label: 'Modular Kitchens', path: '/offering/modular-kitchens' },
            { label: 'Wardrobes', path: '/offering/wardrobes' }
          ]} />

          <NavDropdown title="Guides" cols={2} setIsOpen={setIsOpen} items={[
            { label: 'Modular Kitchen Guides', path: '/guides/modular-kitchen-guides' },
            { label: 'Bedroom Design Guides', path: '/guides/bedroom-design-guides' },
            { label: 'Living Room Design Guides', path: '/guides/living-room-design-guides' },
            { label: 'Dining Room Design Guides', path: '/guides/dining-room-design-guides' },
            { label: 'Kids Room Design Guides', path: '/guides/kids-room-design-guides' },
            { label: 'Study Room Design Guides', path: '/guides/study-room-design-guides' },
            { label: 'Balcony Design Guides', path: '/guides/balcony-design-guides' },
            { label: 'Bathroom Design Guides', path: '/guides/bathroom-design-guides' },
            { label: 'Materials and Finishes', path: '/guides/materials-and-finishes' }
          ]} />

          <NavDropdown title="Blogs" path="/blogs" cols={2} setIsOpen={setIsOpen} items={[
            { label: 'Modular Kitchen Interiors Ideas', path: '/blogs/modular-kitchen-interiors-ideas' },
            { label: 'Home Interior Design Ideas', path: '/blogs/home-interior-design-ideas' },
            { label: 'Bedroom Design Ideas', path: '/blogs/bedroom-design-ideas' },
            { label: 'Living Room Design Ideas', path: '/blogs/living-room-design-ideas' },
            { label: 'Dining Room Design Ideas', path: '/blogs/dining-room-design-ideas' },
            { label: 'Kids Bedroom Design Ideas', path: '/blogs/kids-bedroom-design-ideas' },
            { label: 'Study Room Design Ideas', path: '/blogs/study-room-design-ideas' },
            { label: 'Home Decor Ideas', path: '/blogs/home-decor-ideas' },
            { label: 'DC Home Tours', path: '/blogs/dc-home-tours' },
            { label: 'DC Design Stars', path: '/blogs/dc-design-stars' },
            { label: 'DC Updates', path: '/blogs/dc-updates' }
          ]} />

          <Link to="/experience-centres" className="nav-link-text" onClick={() => setIsOpen(false)}>Experience Centres</Link>

          <NavDropdown title="More" cols={2} setIsOpen={setIsOpen} items={[
            { label: 'About Us', path: '/about-us' },
            { label: 'Why Kryoss Interior', path: '/why-kryoss-interior' },
            { label: 'client Reviews', path: '/reviews' },
            { label: 'Videos', path: '/videos' },
            { label: 'FAQs', path: '/faqs' },
            { label: 'Careers', path: '/careers' },
            { label: 'Become A Design Partner', path: '/become-a-design-partner' },
            { label: 'Become A Franchisee', path: '/become-a-franchisee' },
            { label: 'Channel Partner Program', path: '/channel-partner-signup-login' },
            { label: 'Partner Policy', path: '/partner-policy' },
            { label: 'Refer a Friend', path: '/refer-friend' },
            { label: 'Customer Dashboard', path: '/customer-dashboard' }
          ]} />

          <div className="mobile-only-contact" style={{ marginTop: 'auto', padding: '1rem', display: window.innerWidth > 1024 ? 'none' : 'block' }}>
            <Link to="/contact-us" className="btn-navbar" onClick={() => setIsOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>Get Quote <ArrowRight size={16} /></Link>
          </div>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/contact-us" className="btn-navbar">Get Quote <ArrowRight size={16} /></Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
