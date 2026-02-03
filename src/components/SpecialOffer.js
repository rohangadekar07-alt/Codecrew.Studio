'use client';

import styles from './SpecialOffer.module.css';

const SpecialOffer = () => {
    return (
        <section className={styles['special-offer']}>
            <div className={styles['offer-content']}>
                <span className={styles['offer-badge']}>🎉 LIMITED TIME OFFER</span>
                <h2>Special Discount for Final Year Students</h2>
                <p>
                    Get <strong>exclusive discounts</strong> on all projects during May & June!<br />
                    Perfect timing for your final year submissions.
                </p>
                <a href="#contact" className={`${styles.btn} ${styles['btn-primary']}`}>
                    Claim Your Offer
                </a>
            </div>
        </section>
    );
};

export default SpecialOffer;
