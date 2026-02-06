'use client';

import styles from './Services.module.css';
import { Globe, Smartphone, Brain, Terminal, Coffee, GraduationCap } from 'lucide-react';

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <h2 className={styles['section-title']}>Our Services</h2>
                <p className={styles['section-subtitle']}>
                    Professional development services at affordable prices
                </p>

                <div className={styles['services-grid']}>
                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <Globe />
                        </span>
                        <h3>Web Applications</h3>
                        <p>Full-stack web apps with modern frameworks like React, Next.js, and Node.js. Get deployed links, not just code!</p>
                    </div>

                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <Smartphone />
                        </span>
                        <h3>Mobile Applications</h3>
                        <p>Native and cross-platform mobile apps for Android and iOS. Ready to deploy on app stores.</p>
                    </div>

                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <Brain />
                        </span>
                        <h3>Machine Learning</h3>
                        <p>ML models, data analysis, and AI solutions. From concept to deployment with complete documentation.</p>
                    </div>

                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <Terminal />
                        </span>
                        <h3>Python Projects</h3>
                        <p>Automation, data science, web scraping, Django/Flask applications, and more.</p>
                    </div>

                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <Coffee />
                        </span>
                        <h3>Java Projects</h3>
                        <p>Enterprise applications, Spring Boot, Android apps, and desktop applications.</p>
                    </div>

                    <div className={styles['service-card']}>
                        <span className={styles['service-icon']}>
                            <GraduationCap />
                        </span>
                        <h3>Final Year Projects</h3>
                        <p>Complete project solutions with documentation, presentation, and deployment for BE students.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
