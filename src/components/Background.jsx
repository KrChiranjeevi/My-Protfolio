import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create complex, slow floating animations for each element
      elementsRef.current.forEach((el, index) => {
        if (!el) return;
        
        // Randomize initial positions and scales
        gsap.set(el, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          scale: gsap.utils.random(0.8, 1.2),
          rotation: gsap.utils.random(0, 360)
        });

        // Create endless floating timeline
        gsap.to(el, {
          x: `+=${gsap.utils.random(-150, 150)}`,
          y: `+=${gsap.utils.random(-150, 150)}`,
          rotation: `+=${gsap.utils.random(-45, 45)}`,
          duration: gsap.utils.random(15, 25),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth),
            y: gsap.utils.unitize(y => parseFloat(y) % window.innerHeight)
          }
        });

        // Separate scale pulse
        gsap.to(el, {
          scale: gsap.utils.random(1.1, 1.5),
          duration: gsap.utils.random(8, 12),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Mouse parallax effect
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to(elementsRef.current, {
          x: `+=${x}`,
          y: `+=${y}`,
          duration: 2,
          ease: "power2.out",
          stagger: 0.05
        });
      };

      // 3D Scroll Parallax effect
      let currentScroll = window.scrollY;
      const handleScroll = () => {
        const newScroll = window.scrollY;
        const scrollDelta = newScroll - currentScroll;
        currentScroll = newScroll;

        gsap.to(elementsRef.current, {
          y: `+=${scrollDelta * -0.7}`, // Increased parallax depth
          rotation: `+=${scrollDelta * 0.05}`,
          duration: 0.1, // Almost instant
          ease: "none", // No sluggish easing
          stagger: 0.01
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 overflow-hidden pointer-events-none bg-[#030014]">
      {/* Deep Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0026] to-[#030014] opacity-90" />
      
      {/* GSAP Animated Orbs */}
      <div 
        ref={el => elementsRef.current[0] = el}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-[80px]"
      />
      <div 
        ref={el => elementsRef.current[1] = el}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-[100px]"
      />
      <div 
        ref={el => elementsRef.current[2] = el}
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,transparent_70%)] blur-[70px]"
      />

      {/* GSAP Animated Abstract Tech Rings */}
      <div ref={el => elementsRef.current[3] = el} className="absolute top-[20%] right-[10%] w-96 h-96 border-[1px] border-indigo-500/10 rounded-full" />
      <div ref={el => elementsRef.current[4] = el} className="absolute bottom-[20%] left-[10%] w-[30rem] h-[30rem] border-[1px] border-purple-500/10 rounded-full" />
      <div ref={el => elementsRef.current[5] = el} className="absolute top-[40%] left-[20%] w-64 h-64 border-[1px] border-cyan-500/10 rounded-full border-dashed" />

      {/* Global Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030014_100%)] opacity-80" />
    </div>
  );
};

export default AnimatedBackground;
