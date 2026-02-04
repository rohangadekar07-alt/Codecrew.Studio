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

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <div className={styles['navbar-logo']}>
                    <img src="/logo.jpg" alt="CodeCrew Studio" className={styles['logo-img']} />
                    <span className={styles['logo-text']}>CodeCrew Studios</span>
                </div>

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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
