'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', threshold = 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger every time the element enters or leaves the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check for light mode on mount and whenever class changes if possible, 
    // but relying on a simple check here is usually enough for the toggle.
    // A more robust way is to listen to the storage event or use a context, 
    // but checking the attribute directly is efficient for this specific component logic.
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsLightMode(theme === 'light');
    };

    // Initial check
    checkTheme();

    // Create a mutation observer to watch for theme changes on the html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${!isLightMode ? `reveal ${isVisible ? 'active' : ''}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
