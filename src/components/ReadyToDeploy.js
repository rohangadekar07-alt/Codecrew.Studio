'use client';

import styles from './ReadyToDeploy.module.css';

const displayProducts = [
    {
        id: 1,
        title: 'E-Commerce Starter Kit',
        description: 'A complete full-stack e-commerce solution with admin dashboard, payment gateway integration, and order management.',
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        price: '₹2,499',
        icon: '🛍️'
    },
    {
        id: 2,
        title: 'Restaurant Management System',
        description: 'Digital menu, QR ordering, kitchen display system (KDS), and inventory tracking for modern restaurants.',
        techStack: ['React', 'Firebase', 'Tailwind'],
        price: '₹3,999',
        icon: '🍽️'
    },
    {
        id: 3,
        title: 'School ERP System',
        description: 'Comprehensive school management software for attendance, fees, exams, and student tracking.',
        techStack: ['PHP/Laravel', 'MySQL', 'Bootstrap'],
        price: '₹4,999',
        icon: '🏫'
    }
];

const ReadyToDeploy = () => {
    return (
        <section className={styles.container} id="digital-products">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Products</h2>
                    <span className={styles.sectionBadge}>Ready-to-Deploy</span>
                    <p className={styles.subtitle}>
                        Accelerate your business or project with our high-quality, pre-built digital products.
                        Instant access to source code and documentation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {displayProducts.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{product.icon}</span>
                            </div>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productDesc}>{product.description}</p>

                            <div className={styles.techStack}>
                                {product.techStack.map((tech, index) => (
                                    <span key={index} className={styles.techBadge}>{tech}</span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReadyToDeploy;
