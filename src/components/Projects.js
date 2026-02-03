'use client';

import styles from './Projects.module.css';

const Projects = () => {
    return (
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
    );
};

export default Projects;
