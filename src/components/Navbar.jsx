import { useState } from 'react';

function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Projects', target: 'projects' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Resume', target: 'resume' },
    { label: 'Contact', target: 'contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (target) => {
    setIsOpen(false);
    setActiveTab(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleLinkClick('home'); 
          }}
        >
          Manjunath<span>.</span>
        </a>

        {/* Hamburger toggle button */}
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className={`nav-link ${activeTab === item.target ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.target);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
