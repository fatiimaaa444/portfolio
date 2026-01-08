const projects = [
  {
    title: "MERN CRUD Application",
    desc: "A full-stack CRUD application featuring REST APIs, backend validation, and database integration.",
    tech: "React, Node.js, Express, MongoDB",
  },
  {
    title: "Personal Portfolio",
    desc: "A responsive portfolio website built with React and Tailwind CSS, designed to showcase projects and skills.",
    tech: "React, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#140709] py-20">
      <h2 className="text-4xl text-white text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#2e101c] p-6 rounded-xl shadow-lg hover:-translate-y-2 transition transform"
          >
            <h3 className="text-xl text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
            <p className="text-sm text-[#a7376f]">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
