import Animate from "./Animate";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Node.js", "MongoDB", "Tailwind"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#140709] py-24">
      <Animate>
        <h2 className="text-3xl text-[#FFECEA] text-center mb-10">
          Technologies I Use
        </h2>
      </Animate>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill, i) => (
          <Animate key={i} delay={i * 0.1}>
            <span
              className="px-6 py-2 rounded-xl
              bg-[#A14B58]/20 text-[#FFECEA]
              border border-[#A14B58]/30"
            >
              {skill}
            </span>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;
