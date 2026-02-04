'use client';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <div className={styles['navbar-logo']}>
                    <img src="/logo.jpg" alt="CodeCrew Studio" className={styles['logo-img']} />
                    <span className={styles['logo-text']}>CodeCrew Studios</span>
                </div>
                <div className={styles['navbar-links']}>
                    <a href="#hero">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#features">Why Us</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
