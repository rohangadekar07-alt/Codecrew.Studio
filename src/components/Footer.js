'use client';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandColumn}>
                        <h2 className={styles.logoText}>CodeCrew Studio</h2>
                        <p className={styles.brandDesc}>
                            Transforming ideas into digital reality. We build accessible, high-performance web and mobile solutions for students and businesses.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.instagram.com/codecrew.studio?igsh=bnRxcXppc2NudGFm" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>


                        </div>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h3>Services</h3>
                        <ul>
                            <li>
                                <a href="#services">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                    </svg>
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                                        <path d="M8.5 8.5v.01"></path>
                                        <path d="M16 8v.01"></path>
                                        <path d="M12 16v.01"></path>
                                    </svg>
                                    Machine Learning
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                    Student Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.contactColumn}>
                        <h3>Contact Us</h3>
                        <p>Pune, Maharashtra, India</p>
                        <p><a href="mailto:codecrewstudio.info@gmail.com">codecrewstudio.info@gmail.com</a></p>
                        <p><a href="tel:+919689420767">+91 96894 20767</a></p>
                        <p><a href="tel:+919767805776">+91 97678 05776</a></p>

                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} CodeCrew Studio. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
