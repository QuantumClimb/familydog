import { useEffect } from 'react';

export default function PawTrail() {
  useEffect(() => {
    // Only add paw trail on desktop devices
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const paw = document.createElement('div');
      paw.className = 'paw-print';
      paw.style.left = e.pageX + 'px';
      paw.style.top = e.pageY + 'px';
      paw.textContent = '🐾';
      document.body.appendChild(paw);
      
      // Remove paw after animation completes
      setTimeout(() => {
        if (paw.parentNode) {
          paw.remove();
        }
      }, 1200);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible
}