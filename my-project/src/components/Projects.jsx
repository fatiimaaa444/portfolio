import Animate from "./Animate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { title: "Basic Calculator", desc: "Responsive calculator with real-time logic." },
  { title: "Royal Plate", desc: "Restaurant website frontend." },
  { title: "Weather Website", desc: "Real-time weather using API." },
  { title: "To-Do List", desc: "CRUD task management app." },
  { title: "Portfolio Website", desc: "Personal responsive portfolio." },
  { title: "Limelight Clone", desc: "Full-stack app with APIs." },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <Animate>
        <h2 className="text-4xl text-[#FFECEA] text-center mb-14">
          My Projects
        </h2>
      </Animate>

      <div className="max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full bg-[#1b0d13] p-8 rounded-2xl
                border border-[#A14B58]/30
                hover:-translate-y-2 transition
                hover:shadow-[0_0_40px_#6C131F55]"
              >
                <h3 className="text-xl text-[#FFECEA] mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {p.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
