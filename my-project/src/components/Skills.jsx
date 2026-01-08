const skills = [
  {
    title: "Frontend Development",
    desc: "React, JavaScript, HTML, CSS, Tailwind CSS",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express.js, REST APIs",
  },
  {
    title: "UI / UX Design",
    desc: "Responsive design, accessibility, user-focused layouts",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#3b182f] py-20">
      <h2 className="text-4xl text-white mb-12 ml-8">Skills</h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2e101c]/70 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition transform"
          >
            <h3 className="text-xl text-white mb-3">{skill.title}</h3>
            <p className="text-gray-300 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
