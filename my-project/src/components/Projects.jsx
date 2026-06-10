"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Animate from "./Animate";

const projects = [
  { title: "Portfolio Website", desc: "A fast, responsive personal site to showcase my work and skills." },
  { title: "AI Chatbot", desc: "An intelligent chatbot that understands context and responds naturally." },
  { title: "Royal Plate", desc: "A restaurant frontend with an interactive menu and easy reservation system." },
  { title: "Weather Website", desc: "A real-time weather app that shows accurate forecasts globally." },
  { title: "Basic Calculator", desc: "A simple, responsive calculator with real-time calculations." },
  { title: "Limelight Clone", desc: "A full-stack e-commerce site with product management and a scalable backend." },
];

const ITEM_WIDTH = 400;
const GAP = 24;

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (projects.length - 1) * (ITEM_WIDTH + GAP);

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="projects" className="bg-[#edd3d3]  ">
      <Animate>
        <div className=" flex flex-col md:flex-row md:items-end md:justify-between max-w-5xl -mb-30 mx-auto p-6 gap-4">

          {/* Left side */}
          <div>
            <span
              className="text-[11px] tracking-[0.45em] uppercase"
              style={{ color: "#A14B58" }}
            >
              My Work
            </span>

            <h2
              className="uppercase font-semi text-[#A14B58] mt-2 "
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Projects
            </h2>
          </div>

          {/* Right description */}
          <p className="text-[#A14B58]/80 font-mono text-sm max-w-xs md:text-right leading-relaxed hidden md:block">
            A selection of real-world projects I’ve built to explore, solve problems,
            and craft modern web experiences
          </p>

        </div>
      </Animate>

      {/* Scroll container */}
      <div ref={containerRef} className="relative h-[200vh] px-2 ">

        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center">

          {/* Horizontal motion track */}
          <motion.div
            style={{ x }}
            className="flex gap-6 px-6"
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="relative w-[395px] shrink-0 rounded-[20px] overflow-hidden border
                 border-white/10 bg-[#1b0d13]  shadow-[0_25px_70px_rgba(0,0,0,0.55)]z  transition-all duration-300 hover:scale-[1.03] group"
              >

                {/* gradient overlay (same style system as Skills) */}
                <div
                  className="absolute inset-0 opacity-90 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(108,19,31,0.55) 0%, rgba(27,13,19,0.25) 100%)",
                  }}
                />

                {/* soft shine layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
                  }}
                />

                {/* top accent bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#A14B58] via-[#FFECEA]/40 to-transparent" />

                <div className="p-8 relative z-10 flex flex-col gap-4">

                  {/* project number (same accent system) */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#A14B58] text-xs tracking-[0.35em] font-mono uppercase">
                      Project 0{i + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>

                  {/* title */}
                  <h3 className="text-2xl font-semibold text-[#FFECEA] leading-snug group-hover:text-white transition">
                    {p.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm text-[#FFECEA]/60 group-hover:text-[#FFECEA]/80 leading-relaxed transition">
                    {p.desc}
                  </p>

                  {/* accent underline (like Skills pills border system) */}
                  <div className="w-14 h-[2px] bg-[#A14B58] group-hover:w-24 transition-all duration-500" />

                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
