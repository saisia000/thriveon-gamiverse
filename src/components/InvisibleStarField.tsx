
import React, { useEffect, useRef } from 'react';

const InvisibleStarField = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starField = starFieldRef.current;
    if (!starField) return;

    const numberOfStars = 300;
    const glowRadius = 150;
    const stars: HTMLDivElement[] = [];

    // Clear existing stars
    starField.innerHTML = '';

    // Create stars distributed across ENTIRE viewport using viewport units
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'invisible-star';
      
      // Random size (2-8px for more variety)
      const size = Math.random() > 0.8 ? 8 : Math.random() > 0.6 ? 6 : Math.random() > 0.3 ? 4 : 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // FIXED: Use viewport coordinates directly
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.position = 'fixed'; // Use fixed positioning for viewport coverage
      star.style.zIndex = '9999'; // Ensure stars appear above all content
      
      // More secondary color stars for variety
      if (Math.random() > 0.6) {
        star.classList.add('secondary');
      }
      
      starField.appendChild(star);
      stars.push(star);
    }

    // Enhanced mouse move handler with viewport coordinates
    let animationId: number;
    const handleMouseMove = (event: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      animationId = requestAnimationFrame(() => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
          // Get star position directly from its fixed positioning
          const starX = parseFloat(star.style.left);
          const starY = parseFloat(star.style.top);
          
          const distance = Math.sqrt(
            Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
          );

          if (distance < glowRadius) {
            star.classList.add('active');
            // Add distance-based opacity for more magic
            const opacity = 1 - (distance / glowRadius);
            star.style.opacity = Math.max(0.3, opacity).toString();
          } else {
            star.classList.remove('active');
            star.style.opacity = '0';
          }
        });
      });
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      stars.forEach(star => {
        star.classList.remove('active');
        star.style.opacity = '0';
      });
    };

    // Resize handler to redistribute stars when window size changes
    const handleResize = () => {
      stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
      });
    };

    // Add event listeners to document for full coverage
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    console.log(`InvisibleStarField: Created ${numberOfStars} stars across full viewport with fixed positioning and high z-index`);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div 
      ref={starFieldRef}
      className="invisible-star-field"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    />
  );
};

export default InvisibleStarField;
