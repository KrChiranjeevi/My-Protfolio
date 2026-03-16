import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const particles = containerRef.current.children;
      
      Array.from(particles).forEach((particle) => {
        // Randomize initial positions
        gsap.set(particle, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          opacity: gsap.utils.random(0.2, 0.8),
          scale: gsap.utils.random(0.5, 1.5)
        });

        // Endless abstract floating animation
        gsap.to(particle, {
          y: `-=${gsap.utils.random(100, 300)}`,
          x: `+=${gsap.utils.random(-50, 50)}`,
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(10, 20),
          ease: "none",
          repeat: -1,
          modifiers: {
            y: gsap.utils.unitize(y => (parseFloat(y) % window.innerHeight + window.innerHeight) % window.innerHeight),
            x: gsap.utils.unitize(x => (parseFloat(x) % window.innerWidth + window.innerWidth) % window.innerWidth)
          }
        });

        // Twinkling opacity
        gsap.to(particle, {
          opacity: gsap.utils.random(0.1, 1),
          duration: gsap.utils.random(2, 5),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // 3D Parallax Scroll Effect for particles
      let currentScroll = window.scrollY;
      const handleScroll = () => {
        const newScroll = window.scrollY;
        const scrollDelta = newScroll - currentScroll;
        currentScroll = newScroll;

        gsap.to(particles, {
          y: `+=${scrollDelta * -1.5}`, // Faster depth movement
          duration: 0.1, // Instant response
          ease: "none", // Removes the delayed trailing feeling
          stagger: 0.005 
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full mix-blend-screen"
          style={{
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() * 2 + 1}px rgba(255, 255, 255, 0.4)`
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={`blue-${i}`}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full mix-blend-screen"
          style={{
            boxShadow: `0 0 ${Math.random() * 15 + 5}px ${Math.random() * 3 + 1}px rgba(96, 165, 250, 0.4)`
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={`purple-${i}`}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full mix-blend-screen"
          style={{
            boxShadow: `0 0 ${Math.random() * 15 + 5}px ${Math.random() * 3 + 1}px rgba(192, 132, 252, 0.4)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
