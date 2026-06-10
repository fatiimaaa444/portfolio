import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend Core",
    skills: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(90deg, rgba(108,19,31,0.5) 0%, rgba(27,13,19,0.3) 100%)",
    accent: "#A14B58",
  },
  {
    category: "Frontend Frameworks",
    skills: ["React", "Tailwind CSS"],
    gradient: "linear-gradient(90deg, rgba(161,75,88,0.4) 0%, rgba(108,19,31,0.25) 100%)",
    accent: "#FFECEA",
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MongoDB", "Express.js"],
    gradient: "linear-gradient(90deg, rgba(108,19,31,0.6) 0%, rgba(161,75,88,0.2) 100%)",
    accent: "#A14B58",
  },
  {
    category: "WordPress & SEO",
    skills: ["WordPress", "On-Page SEO","Off-Page SEO"],
    gradient: "linear-gradient(90deg, rgba(161,75,88,0.5) 0%, rgba(43,10,16,0.3) 100%)",
    accent: "#FFECEA",
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code"],
    gradient: "linear-gradient(90deg, rgba(43,10,16,0.7) 0%, rgba(108,19,31,0.3) 100%)",
    accent: "#FFECEA",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="bg-[#edd3d3] py-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Section header ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-[11px] tracking-[0.45em] uppercase"
              style={{ color: "#A14B58" }}>
              My Stack
            </span>
            <h2 className="font-display uppercase font-semi text-[#A14B58] mt-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Technologies
            </h2>
          </div>
          <p className="text-[#A14B58]/80 font-mono text-sm max-w-xs md:text-right leading-relaxed hidden md:block">
            The tools and technologies I reach for, to craft great web experiences
          </p>
        </motion.div>

        {/* ── Disk stack (Marimba-inspired) ────────── */}
        <div ref={ref} className="flex flex-col gap-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -70 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
              style={{ zIndex: skillGroups.length - i }}
            >
              {/* Disk ellipse shape */}
              <div
                className="relative w-full overflow-hidden transition-all duration-500 cursor-default
                  border border-white/5 group-hover:border-[#A14B58]/30"
                style={{
                  borderRadius: "999px",
                  height: "88px",
                  background: "#1b0d13",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                  style={{ background: group.gradient, borderRadius: "inherit" }}
                />

                {/* Subtle shine */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                    borderRadius: "inherit",
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex items-center justify-between px-8 md:px-12">
                  {/* Category label */}
                  <h3
                    className="text-xs md:text-sm tracking-[0.3em] uppercase
                      text-[#FFECEA]/50 group-hover:text-[#FFECEA]/80
                      transition-colors duration-400 font-medium shrink-0"
                  >
                    {group.category}
                  </h3>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 rounded-full text-xs
                          border border-white/8 bg-white/4
                          text-[#FFECEA]/60 group-hover:text-[#FFECEA]/85
                          group-hover:border-[#A14B58]/30
                          backdrop-blur-sm transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-10 h-px origin-left"
          style={{
            background: "linear-gradient(to right, transparent, rgba(161,75,88,0.3), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default Skills;
