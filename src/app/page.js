'use client';

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import SpecialOffer from '@/components/SpecialOffer';
import Projects from '@/components/Projects';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className={styles['landing-page']}>
      <Navbar />
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <SpecialOffer />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
