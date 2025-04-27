
import React, { useEffect, useRef } from 'react';
import { Satellite } from 'lucide-react';

const Earth: React.FC = () => {
  const satelliteRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const satellites = satelliteRefs.current;
    let angle = 0;

    const animate = () => {
      angle += 0.002; // Reduced speed for slower rotation
      satellites.forEach((satellite, index) => {
        const offset = (2 * Math.PI * index) / satellites.length;
        const x = Math.cos(angle + offset) * 150; // Increased orbit radius
        const y = Math.sin(angle + offset) * 150;
        if (satellite) {
          satellite.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 57.2958}deg)`;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
        <img
          src="/lovable-uploads/fbaf0800-0b95-4557-b90f-2d97d8d556db.png"
          alt="Earth"
          className="w-full h-full object-cover"
        />
      </div>
      {[0, 1, 2, 3].map((_, index) => (
        <div
          key={index}
          ref={(el) => el && (satelliteRefs.current[index] = el)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Satellite className="text-blue-400 w-4 h-4" />
        </div>
      ))}
    </div>
  );
};

export default Earth;
