
import React, { useEffect, useRef } from 'react';
import { Earth as EarthIcon, Satellite } from 'lucide-react';

const Earth: React.FC = () => {
  const earthRef = useRef<HTMLDivElement>(null);
  const satelliteRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const satellites = satelliteRefs.current;
    let angle = 0;

    const animate = () => {
      angle += 0.005;
      satellites.forEach((satellite, index) => {
        const offset = (2 * Math.PI * index) / satellites.length;
        const x = Math.cos(angle + offset) * 120;
        const y = Math.sin(angle + offset) * 120;
        if (satellite) {
          satellite.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 57.2958}deg)`;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      <div ref={earthRef} className="relative">
        <EarthIcon size={200} className="text-blue-500" />
      </div>
      {[0, 1, 2].map((_, index) => (
        <div
          key={index}
          ref={(el) => el && (satelliteRefs.current[index] = el)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Satellite className="text-blue-400 w-6 h-6" />
        </div>
      ))}
    </div>
  );
};

export default Earth;
