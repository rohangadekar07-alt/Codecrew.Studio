'use client';

import styles from './Features.module.css';

const Features = () => {
    return (
        <section className={styles.features} id="features">
            <div className={styles.container}>
                <h2 className={styles['section-title']}>Why Choose Us?</h2>

                <div className={styles['features-grid']}>
                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>💰</div>
                        <h3>Affordable Pricing</h3>
                        <p>Student-friendly rates without compromising quality</p>
                    </div>

                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>🚀</div>
                        <h3>Deployed Solutions</h3>
                        <p>Get working deployed links, not just source code</p>
                    </div>

                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>📚</div>
                        <h3>Complete Documentation</h3>
                        <p>Detailed documentation and project reports included</p>
                    </div>

                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>⚡</div>
                        <h3>Fast Delivery</h3>
                        <p>Quick turnaround time for urgent projects</p>
                    </div>

                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>🛠️</div>
                        <h3>Post-Delivery Support</h3>
                        <p>Free support and bug fixes after delivery</p>
                    </div>

                    <div className={styles['feature-item']}>
                        <div className={styles['feature-icon']}>✅</div>
                        <h3>Quality Assured</h3>
                        <p>Tested, optimized, and production-ready code</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
