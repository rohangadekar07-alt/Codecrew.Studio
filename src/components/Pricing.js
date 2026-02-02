import styles from './Pricing.module.css';

const Pricing = () => {
    return (
        <section className={styles.pricing} id="pricing">
            <div className={styles.container}>
                <h2 className={styles['section-title']}>Affordable Pricing</h2>
                <p className={styles['section-subtitle']}>
                    Transparent pricing with no hidden costs. Choose the plan that fits your needs.
                </p>

                <div className={styles['pricing-grid']}>
                    {/* Basic Plan */}
                    <div className={styles['pricing-card']}>
                        <div className={styles['plan-header']}>
                            <span className={styles['plan-icon']}>🚀</span>
                            <h3>Basic</h3>
                            <p className={styles['plan-description']}>Perfect for simple projects</p>
                        </div>
                        <div className={styles['price-tag']}>
                            <span className={styles['currency']}>₹</span>
                            <span className={styles['amount']}>5,000</span>
                            <span className={styles['period']}>/project</span>
                        </div>
                        <ul className={styles['features-list']}>
                            <li>✅ Basic Web/Mobile App</li>
                            <li>✅ Up to 5 Pages/Screens</li>
                            <li>✅ Responsive Design</li>
                            <li>✅ Basic Documentation</li>
                            <li>✅ 7 Days Support</li>
                            <li>✅ Source Code</li>
                        </ul>
                        <button className={`${styles.btn} ${styles['btn-outline']}`}>
                            Get Started
                        </button>
                    </div>

                    {/* Standard Plan - Popular */}
                    <div className={`${styles['pricing-card']} ${styles.popular}`}>
                        <div className={styles['popular-badge']}>Most Popular</div>
                        <div className={styles['plan-header']}>
                            <span className={styles['plan-icon']}>⭐</span>
                            <h3>Standard</h3>
                            <p className={styles['plan-description']}>Best for most students</p>
                        </div>
                        <div className={styles['price-tag']}>
                            <span className={styles['currency']}>₹</span>
                            <span className={styles['amount']}>10,000</span>
                            <span className={styles['period']}>/project</span>
                        </div>
                        <ul className={styles['features-list']}>
                            <li>✅ Full-Stack Application</li>
                            <li>✅ Up to 10 Pages/Screens</li>
                            <li>✅ Database Integration</li>
                            <li>✅ Complete Documentation</li>
                            <li>✅ Deployed Link Included</li>
                            <li>✅ 15 Days Support</li>
                            <li>✅ Source Code + Report</li>
                        </ul>
                        <button className={`${styles.btn} ${styles['btn-primary']}`}>
                            Choose Plan
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className={styles['pricing-card']}>
                        <div className={styles['plan-header']}>
                            <span className={styles['plan-icon']}>💎</span>
                            <h3>Premium</h3>
                            <p className={styles['plan-description']}>Advanced projects with ML/AI</p>
                        </div>
                        <div className={styles['price-tag']}>
                            <span className={styles['currency']}>₹</span>
                            <span className={styles['amount']}>15,000</span>
                            <span className={styles['period']}>/project</span>
                        </div>
                        <ul className={styles['features-list']}>
                            <li>✅ Advanced Full-Stack App</li>
                            <li>✅ Unlimited Pages/Screens</li>
                            <li>✅ ML/AI Integration</li>
                            <li>✅ Advanced Features</li>
                            <li>✅ Deployed Link + Domain</li>
                            <li>✅ 30 Days Support</li>
                            <li>✅ Complete Package</li>
                            <li>✅ Presentation Included</li>
                        </ul>
                        <button className={`${styles.btn} ${styles['btn-outline']}`}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Special Note */}
                <div className={styles['pricing-note']}>
                    <p>💡 <strong>Special Offer:</strong> Final year students get additional 15% discount in May-June!</p>
                    <p>📞 Need a custom quote? <a href="#contact">Contact us</a> for personalized pricing.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
