'use client';

import styles from './ReadyToDeploy.module.css';

const displayProducts = [
    {
        id: 1,
        title: 'Inventory & Billing Management System',
        description: 'A web-based system that helps small shops or businesses manage products, stock, suppliers, and billing. Admins can track inventory levels, generate invoices, and monitor sales reports.',
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        price: '₹2,499',
        icon: '🛍️'
    },
    {
        id: 2,
        title: 'Gym Management System',
        description: 'The Gym Management System is a web-based application designed to help gym administrators efficiently manage members, trainers, memberships, payments, and attendance in a centralized platform.',
        techStack: ['React', 'Firebase', 'Tailwind'],
        price: '₹3,999',
        icon: '🏋️'
    },
    {
        id: 3,
        title: 'Student Course & Attendance Management System',
        description: 'A web-based platform for colleges or coaching institutes to manage student records, course enrollments, attendance, and performance tracking.',
        techStack: ['React', 'MySQL', 'Bootstrap', 'Redis'],
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
