import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollAnimation() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-left, .scroll-fade-right');
      elements.forEach((el) => {
        // Reset visibility first
        el.classList.remove('visible');
        observer.observe(el);
      });
    };

    // Observe elements after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timeoutId);
      const elements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-left, .scroll-fade-right');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]); // Re-run when route changes

  return null;
}