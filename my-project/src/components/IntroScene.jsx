import { useEffect, useRef } from "react";

const waves = [
  { id: "w1", bottom: "75%", zIndex: 1, speed: 0.06, color: "#f5d8de" },
  { id: "w2", bottom: "65%", zIndex: 2, speed: 0.13, color: "#efbfc9" },
  { id: "w3", bottom: "55%", zIndex: 3, speed: 0.22, color: "#e8a8b8" },
  { id: "w4", bottom: "45%", zIndex: 4, speed: 0.33, color: "#d98fa8" },
  { id: "w5", bottom: "35%", zIndex: 5, speed: 0.47, color: "#c47090" },
  { id: "w6", bottom: "25%", zIndex: 6, speed: 0.63, color: "#a84f72" },
  { id: "w7", bottom: "15%", zIndex: 7, speed: 0.82, color: "#7d2d50" },
  { id: "w8", bottom: "0",   zIndex: 8, speed: 1.04, color: "#4a1228" },
];

const wavePaths = [
  "M0,180 C240,300 480,60 720,200 C960,340 1200,80 1440,180 L1440,380 L0,380 Z",
  "M0,220 C200,100 440,320 680,180 C920,40 1160,280 1440,160 L1440,380 L0,380 Z",
  "M0,200 C260,80 520,300 780,160 C1040,20 1240,260 1440,170 L1440,380 L0,380 Z",
  "M0,240 C180,120 400,300 640,180 C880,60 1100,260 1300,160 C1380,120 1430,190 1440,170 L1440,380 L0,380 Z",
  "M0,260 C160,160 360,320 580,200 C800,80 1000,280 1200,180 C1320,120 1400,220 1440,200 L1440,380 L0,380 Z",
  "M0,280 C200,180 420,320 640,210 C860,100 1060,280 1240,190 C1360,130 1420,230 1440,210 L1440,380 L0,380 Z",
  "M0,300 C220,200 460,340 700,230 C940,120 1120,300 1300,210 C1390,160 1430,250 1440,230 L1440,380 L0,380 Z",
  "M0,320 C200,230 440,360 680,260 C920,160 1140,320 1340,240 C1410,200 1440,270 1440,260 L1440,380 L0,380 Z",
];

const WaveLayer = ({ wave, path, layerRef }) => (
  <div
    ref={layerRef}
    style={{
      position: "absolute",
      bottom: wave.bottom,
      zIndex: wave.zIndex,
      width: "110%",
      left: "-5%",
      willChange: "transform",
      maskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
      pointerEvents: "none",
    }}
  >
    {/* Replace this SVG with: <img src="/scene/wave1.png" className="w-full block" /> */}
    <svg
      viewBox="0 0 1440 380"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block"
    >
      <path fill={wave.color} d={path} />
    </svg>
  </div>
);

const IntroScene = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const heroRef = useRef(null);
  const layerRefs = useRef(waves.map(() => ({ current: null })));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const containerH = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / containerH));

      layerRefs.current.forEach((ref, i) => {
        if (!ref.current) return;
        const yMove = progress * waves[i].speed * window.innerHeight * 0.9;
        ref.current.style.transform = `translateY(-${yMove}px)`;
      });

      if (heroRef.current) {
        const opacity = Math.max(0, 1 - progress * 4);
        const yMove = progress * -100;
        heroRef.current.style.opacity = opacity;
        heroRef.current.style.transform = `translate(-50%, calc(-50% + ${yMove}px))`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", height: "300vh" }}>

      {/* STICKY SCENE */}
      <div
        ref={sceneRef}
        style={{ position: "sticky", top: 0, background: "#f5d8de" }}
        className="h-screen w-full overflow-hidden"
      >

        {/* WAVE LAYERS */}
        {waves.map((wave, i) => (
          <WaveLayer
            key={wave.id}
            wave={wave}
            path={wavePaths[i]}
            layerRef={layerRefs.current[i]}
          />
        ))}

        {/* HERO TEXT */}
        <div
          ref={heroRef}
          style={{ position: "absolute", top: "42%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20, willChange: "transform, opacity" }}
          className="text-center whitespace-nowrap"
        >
          {/* Top line */}
          <div className="w-48 h-px bg-[#3d1020]/30 mx-auto mb-3" />

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "22px" }}
            className="text-[clamp(48px,9vw,100px)] font-light text-[#3d1020] leading-none my-1"
          >
            FATIMA
          </h1>

          <p
            style={{ letterSpacing: "8px" }}
            className="text-[clamp(9px,1.1vw,12px)] font-light text-[#7a2d42] uppercase tracking-widest"
          >
            Full Stack Web Developer
          </p>

          {/* Bottom line */}
          <div className="w-48 h-px bg-[#3d1020]/30 mx-auto mt-3" />

          {/* Scroll arrow */}
          <div className="mt-7 flex flex-col items-center gap-0 opacity-40">
            <div
              className="w-px bg-[#3d1020] animate-pulse"
              style={{ height: "40px" }}
            />
            <div
              className="w-2 h-2 border-r border-b border-[#3d1020] -mt-0.5"
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
        </div>

      </div>

      {/* NEXT SECTION — same dark color as bottom wave for seamless join */}
      <div
        style={{ background: "#4a1228" }}
        className="min-h-screen flex flex-col items-center justify-center gap-5 px-10 py-20"
      >
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "10px" }}
          className="text-[clamp(32px,5vw,60px)] font-light text-[#f2e8e4]"
        >
          About Me
        </h2>
        <p
          style={{ letterSpacing: "4px" }}
          className="text-xs font-light text-[#f2e8e4]/40 uppercase"
        >
          Building beautiful digital experiences
        </p>
      </div>

    </div>
  );
};

export default IntroScene;
