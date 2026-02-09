'use client';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBgLogo}></div>
      <div className={styles['hero-content']}>
        <h1>CodeCrew Studio</h1>
        <p>Your One-Stop Solution for Web Apps, Mobile Apps, ML Projects & More<br />
          Affordable Prices • Deployed Solutions • Student-Friendly</p>
        <div className={styles['cta-buttons']}>
          <a href="#services" className={`${styles.btn} ${styles['btn-primary']}`}>
            Explore Services
          </a>
          <a href="#contact" className={`${styles.btn} ${styles['btn-secondary']}`}>
            Get in Touch
          </a>
        </div>
      </div>

      <div className={styles['scroll-indicator']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default HeroSection;
