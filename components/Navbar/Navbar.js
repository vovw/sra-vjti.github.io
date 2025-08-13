import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = ({ currentSection = 0, onSectionChange, sections = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (index) => {
    if (onSectionChange && index < sections.length) {
      onSectionChange(index);
    }
    setIsMenuOpen(false);
  };

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Minimalist corner navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navToggle} onClick={toggleMenu}>
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuContent}>
          <div className={styles.menuClose} onClick={toggleMenu}>×</div>
          
          <div className={styles.menuItems}>
            {sections.map((section, index) => (
              <div
                key={index}
                className={`${styles.menuItem} ${currentSection === index ? styles.active : ''}`}
                onClick={() => handleNavClick(index)}
              >
                <span className={styles.itemNumber}>0{index + 1}</span>
                <span className={styles.itemTitle}>{section}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
