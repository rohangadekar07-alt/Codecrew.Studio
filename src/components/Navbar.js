'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'services', 'projects', 'digital-products', 'features', 'contact'];

            // Find the section currently in view
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If top of section is within the viewport (with some offset)
                    // or if we are near the bottom of the page
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check for saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <div className={styles['navbar-logo']}>
                    <img src="/logo.jpg" alt="CodeCrew Studio" className={styles['logo-img']} />
                    <span className={styles['logo-text']}>CodeCrew Studio</span>
                </div>

                <div className={styles['nav-wrapper']} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        className={`${styles['mobile-menu-btn']} ${isOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>

                    <div className={`${styles['navbar-links']} ${isOpen ? styles.active : ''}`}>
                        <a href="#hero" className={activeSection === 'hero' ? styles.active : ''} onClick={closeMenu}>Home</a>
                        <a href="#services" className={activeSection === 'services' ? styles.active : ''} onClick={closeMenu}>Services</a>
                        <a href="#projects" className={activeSection === 'projects' ? styles.active : ''} onClick={closeMenu}>Projects</a>
                        <a href="#digital-products" className={activeSection === 'digital-products' ? styles.active : ''} onClick={closeMenu}>Products</a>
                        <a href="#features" className={activeSection === 'features' ? styles.active : ''} onClick={closeMenu}>Why Us</a>
                        <a href="#contact" className={activeSection === 'contact' ? styles.active : ''} onClick={closeMenu}>Contact</a>

                        {/* Mobile view theme toggle */}
                        <button className={styles['theme-toggle']} onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? (
                                /* Sun Icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                /* Moon Icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop view theme toggle (hidden on mobile via CSS if needed, or keeping duplicate for now) */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
