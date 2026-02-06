'use client';

import { useRef, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    useEffect(() => {
        const refs = [videoRef, videoRef2, videoRef3];

        // Set playback rates
        if (videoRef.current) videoRef.current.playbackRate = 1.0;
        if (videoRef2.current) videoRef2.current.playbackRate = 2.0;
        if (videoRef3.current) videoRef3.current.playbackRate = 1.3;

        // Intersection Observer for auto-play on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Find the video element associated with this entry
                    const video = entry.target;

                    if (entry.isIntersecting) {
                        video.play().catch(err => {
                            console.log('Auto-play prevented:', err);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.2 } // Play when 20% of video is visible
        );

        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

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
                                ref={videoRef}
                                className={styles['project-video']}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source src="/Tourist.mp4" type="video/mp4" />
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
                                ref={videoRef2}
                                className={styles['project-video']}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source src="/AdoptBuddy.mp4" type="video/mp4" />
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
                                ref={videoRef3}
                                className={styles['project-video']}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source src="/FitnessGenes.mp4" type="video/mp4" />
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
