import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { NavbarData } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const size = useWindowSize();
  const router = useRouter();

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      router.push('/');
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClick = () => {
    closeMenu();
  };

  return (
    <>
      <header
        className={`${styles.navbar} ${hasScrolled ? styles.scrolled : ''}`}
        id='navbar'
      >
        <div className={styles.navbarContainer}>
          {/* Brand Logo */}
          <Link href='/' onClick={linkClick}>
            <div className={styles.navHome} id='nav-home'>
              <img
                className={styles.sraLogo}
                src={'/static/images/SRA_logo.png'}
                alt='SRA Logo'
              />
            </div>
          </Link>

          {/* Menu Button - Always visible */}
          <button
            className={`${styles.menuToggle} ${
              isMenuOpen ? styles.menuOpen : ''
            }`}
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls='fullscreen-menu'
          >
            <span className={styles.menuText}>
              Menu
            </span>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.menuIcon}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div
          className={styles.fullscreenMenu}
          id='fullscreen-menu'
          aria-hidden={!isMenuOpen}
          role='dialog'
          aria-modal='true'
        >
          {/* Hamburger button inside overlay */}
          <button
            className={styles.overlayMenuToggle}
            onClick={toggleMenu}
            aria-label='Close navigation menu and return to landing page'
            style={{ position: 'fixed', top: '2rem', right: '2rem', left: 'auto', zIndex: 1000002 }}
          >
            <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
          </button>
          <div className={styles.menuContent}>
            <div className={styles.menuItems}>
              {NavbarData.map((navItem, idx) => (
                <div
                  key={idx}
                  className={styles.menuItemWrapper}
                >
                  {navItem.subMenu ? (
                    <div className={styles.menuItemWithSubmenu}>
                      <Link href={navItem.link} onClick={linkClick}>
                        <h3 className={styles.menuItemHeading}>
                          {navItem.name}
                        </h3>
                      </Link>
                      <div className={styles.submenuItems}>
                        {navItem.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.link}
                            onClick={linkClick}
                            className={styles.submenuLink}
                            style={{
                              animationDelay: `${0.45 + subIdx * 0.05}s`,
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={navItem.link} onClick={linkClick}>
                      <h3 className={styles.menuItemHeading}>{navItem.name}</h3>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
