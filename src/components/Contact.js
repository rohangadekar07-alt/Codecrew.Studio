'use client';

import styles from './Contact.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Project Inquiry from ${data.name}`;
        const body = `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}

Message:
${data.message}`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=codecrewstudio.info@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    return (
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

                        <form className={styles['contact-form']} onSubmit={handleSubmit}>
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
                            <div className={styles['info-icon']}>
                                <MapPin className={styles.icon} />
                            </div>
                            <h4>Visit Us</h4>
                            <p>Pune, Maharashtra</p>
                            <p className={styles['info-detail']}>India</p>
                        </div>

                        <div className={styles['info-card']}>
                            <div className={styles['info-icon']}>
                                <Phone className={styles.icon} />
                            </div>
                            <h4>Call Us</h4>
                            <p><a href="tel:9688420767">9688420767</a></p>
                            <p><a href="tel:9767857776">9767857776</a></p>
                        </div>

                        <div className={styles['info-card']}>
                            <div className={styles['info-icon']}>
                                <Mail className={styles.icon} />
                            </div>
                            <h4>Email Us</h4>
                            <p><a href="mailto:codecrewstudio.info@gmail.com">codecrewstudio.info@gmail.com</a></p>
                            <p className={styles['info-detail']}>We reply within 24 hours</p>
                        </div>

                        <div className={styles['info-card']}>
                            <div className={styles['info-icon']}>
                                <Clock className={styles.icon} />
                            </div>
                            <h4>Working Hours</h4>
                            <p>Mon - Fri: 10 AM - 7 PM</p>
                            <p className={styles['info-detail']}>Saturday - Sunday: By Appointment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
