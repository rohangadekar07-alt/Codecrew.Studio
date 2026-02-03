'use client';

import { useEffect } from 'react';
import styles from './LandingPage.module.css';

import Navbar from './Navbar';
import HeroSection from './HeroSection';

const LandingPage = () => {
    useEffect(() => {
        // Scroll animation observer - triggers every time
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['animate-in']);
                } else {
                    // Remove class when element leaves viewport so it can animate again
                    entry.target.classList.remove(styles['animate-in']);
                }
            });
        }, observerOptions);

        // Observe ALL components for consistent animations
        const elementsToAnimate = document.querySelectorAll(
            `.${styles['service-card']}, .${styles['project-card']}, .${styles['feature-item']}, .${styles['info-card']}, .${styles['contact-form-container']}, .${styles['offer-content']}, .${styles['section-title']}, .${styles['section-subtitle']}, .${styles['services-grid']}, .${styles['projects-grid']}, .${styles['features-grid']}, .${styles['contact-wrapper']}, .${styles['offer-badge']}, .${styles['form-header']}, .${styles['contact-info-cards']}`
        );

        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });

        // Parallax scroll effect
        const handleScroll = () => {
            const scrolled = window.pageYOffset;



            // Subtle parallax for sections
            const sections = document.querySelectorAll(`.${styles.services}, .${styles.projects}, .${styles.features}`);
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const offset = (window.innerHeight - rect.top) * 0.1;
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.style.transform = `translateY(${offset}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={styles['landing-page']}>
            {/* Navbar */}
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <section className={styles.services} id="services">
                <div className={styles.container}>
                    <h2 className={styles['section-title']}>Our Services</h2>
                    <p className={styles['section-subtitle']}>
                        Professional development services at affordable prices
                    </p>

                    <div className={styles['services-grid']}>
                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>🌐</span>
                            <h3>Web Applications</h3>
                            <p>Full-stack web apps with modern frameworks like React, Next.js, and Node.js. Get deployed links, not just code!</p>
                        </div>

                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>📱</span>
                            <h3>Mobile Applications</h3>
                            <p>Native and cross-platform mobile apps for Android and iOS. Ready to deploy on app stores.</p>
                        </div>

                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>🤖</span>
                            <h3>Machine Learning</h3>
                            <p>ML models, data analysis, and AI solutions. From concept to deployment with complete documentation.</p>
                        </div>

                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>🐍</span>
                            <h3>Python Projects</h3>
                            <p>Automation, data science, web scraping, Django/Flask applications, and more.</p>
                        </div>

                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>☕</span>
                            <h3>Java Projects</h3>
                            <p>Enterprise applications, Spring Boot, Android apps, and desktop applications.</p>
                        </div>

                        <div className={styles['service-card']}>
                            <span className={styles['service-icon']}>🎓</span>
                            <h3>Final Year Projects</h3>
                            <p>Complete project solutions with documentation, presentation, and deployment for BE students.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Section */}
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

            {/* Projects Section */}
            <section className={styles.projects} id="projects">
                <div className={styles.container}>
                    <h2 className={styles['section-title']}>Our Projects</h2>
                    <p className={styles['section-subtitle']}>
                        Check out some of our recent work and client projects
                    </p>

                    <div className={styles['projects-grid']}>
                        {/* Project 1 */}
                        <div className={styles['project-card']}>
                            <div className={styles['video-container']}>
                                <video
                                    className={styles['project-video']}
                                    controls
                                    poster="/project-placeholder.jpg"
                                >
                                    <source src="/videos/project1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={styles['project-info']}>
                                <h3>E-Commerce Web App</h3>
                                <p>Full-stack online shopping platform with payment integration</p>
                                <div className={styles['project-tags']}>
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className={styles['project-card']}>
                            <div className={styles['video-container']}>
                                <video
                                    className={styles['project-video']}
                                    controls
                                    poster="/project-placeholder.jpg"
                                >
                                    <source src="/videos/project2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={styles['project-info']}>
                                <h3>Mobile Fitness App</h3>
                                <p>Cross-platform fitness tracking application with AI recommendations</p>
                                <div className={styles['project-tags']}>
                                    <span>React Native</span>
                                    <span>ML</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className={styles['project-card']}>
                            <div className={styles['video-container']}>
                                <video
                                    className={styles['project-video']}
                                    controls
                                    poster="/project-placeholder.jpg"
                                >
                                    <source src="/videos/project3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={styles['project-info']}>
                                <h3>ML Prediction System</h3>
                                <p>Machine learning model for stock price prediction with dashboard</p>
                                <div className={styles['project-tags']}>
                                    <span>Python</span>
                                    <span>TensorFlow</span>
                                    <span>Flask</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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

            {/* Contact Section - Redesigned */}
            <section className={styles.contact} id="contact">
                <div className={styles.container}>
                    <h2 className={styles['section-title']}>Get In Touch</h2>
                    <p className={styles['section-subtitle']}>
                        Ready to start your project? Let's discuss how we can help you succeed!
                    </p>

                    <div className={styles['contact-wrapper']}>
                        {/* Contact Form */}
                        <div className={styles['contact-form-container']}>
                            <div className={styles['form-header']}>
                                <h3>Send us a Message</h3>
                                <p>Fill out the form and we'll get back to you within 24 hours</p>
                            </div>

                            <form className={styles['contact-form']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className={styles['form-group']}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className={styles['form-group']}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className={styles['form-group']}>
                                    <label htmlFor="service">Service Interested In</label>
                                    <select id="service" name="service" required>
                                        <option value="">Select a service</option>
                                        <option value="web">Web Application</option>
                                        <option value="mobile">Mobile Application</option>
                                        <option value="ml">Machine Learning</option>
                                        <option value="python">Python Project</option>
                                        <option value="java">Java Project</option>
                                        <option value="final-year">Final Year Project</option>
                                    </select>
                                </div>

                                <div className={styles['form-group']}>
                                    <label htmlFor="message">Project Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your project requirements..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-full']}`}>
                                    Send Message 📩
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Cards */}
                        <div className={styles['contact-info-cards']}>
                            <div className={styles['info-card']}>
                                <div className={styles['info-icon']}>📍</div>
                                <h4>Visit Us</h4>
                                <p>Pune, Maharashtra</p>
                                <p className={styles['info-detail']}>India</p>
                            </div>

                            <div className={styles['info-card']}>
                                <div className={styles['info-icon']}>📞</div>
                                <h4>Call Us</h4>
                                <p><a href="tel:9688420767">9688420767</a></p>
                                <p><a href="tel:9767857776">9767857776</a></p>
                            </div>

                            <div className={styles['info-card']}>
                                <div className={styles['info-icon']}>✉️</div>
                                <h4>Email Us</h4>
                                <p><a href="mailto:info@codecrewstudio.com">info@codecrewstudio.com</a></p>
                                <p className={styles['info-detail']}>We reply within 24 hours</p>
                            </div>

                            <div className={styles['info-card']}>
                                <div className={styles['info-icon']}>⏰</div>
                                <h4>Working Hours</h4>
                                <p>Mon - Fri: 10 AM - 7 PM</p>
                                <p className={styles['info-detail']}>Saturday - Sunday: By Appointment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; 2026 CodeCrew Studio. All rights reserved. | Based in Pune, India</p>
            </footer>
        </div>
    );
};

export default LandingPage;
