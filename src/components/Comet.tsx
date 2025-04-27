
import React, { useEffect } from 'react';

const Comet = () => {
  useEffect(() => {
    const animateComet = () => {
      const comet = document.getElementById('comet');
      if (comet) {
        comet.style.left = '-200px';
        comet.style.top = `${Math.random() * window.innerHeight}px`;
        
        const animation = comet.animate([
          { left: '-200px', opacity: 0 },
          { left: '10%', opacity: 1 },
          { left: '50%', opacity: 1 },
          { left: '90%', opacity: 1 },
          { left: '100%', opacity: 0 }
        ], {
          duration: 4000,
          easing: 'ease-in-out'
        });

        animation.onfinish = () => {
          setTimeout(animateComet, Math.random() * 10000 + 5000); // Random delay between 5-15 seconds
        };
      }
    };

    animateComet();
  }, []);

  return (
    <div
      id="comet"
      className="fixed pointer-events-none"
      style={{ zIndex: 10 }}
    >
      <div className="relative">
        <div className="absolute w-40 h-1 bg-gradient-to-r from-purple-500 via-blue-400 to-transparent rounded-full blur-[2px]" />
        <div className="w-20 h-1 bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default Comet;
