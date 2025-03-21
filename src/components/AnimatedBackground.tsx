"use client";

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleCount = 20;

  useEffect(() => {
    // Initialize particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // % of screen width
        y: Math.random() * 100, // % of screen height
        size: Math.random() * 2 + 1, // Size between 1-3px
        speedX: (Math.random() - 0.5) * 0.2, // Speed between -0.1 and 0.1
        speedY: (Math.random() - 0.5) * 0.2, // Speed between -0.1 and 0.1
        opacity: Math.random() * 0.5 + 0.1, // Opacity between 0.1-0.6
      });
    }
    setParticles(newParticles);

    // Animation loop
    const animationFrame = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          // Update position
          let x = particle.x + particle.speedX;
          let y = particle.y + particle.speedY;

          // Wrap around edges
          if (x > 100) x = 0;
          if (x < 0) x = 100;
          if (y > 100) y = 0;
          if (y < 0) y = 100;

          return {
            ...particle,
            x,
            y,
          };
        })
      );
    }, 50);

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px rgba(255, 255, 255, ${particle.opacity})`,
            transition: 'all 0.5s linear'
          }}
        />
      ))}
    </div>
  );
}
