import Animate from "./Animate";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center
      bg-gradient-to-b from-[#1b0d13] to-[#140709]"
    >
      <div
        className="max-w-7xl mx-auto px-6
        grid grid-cols-1 md:grid-cols-2
        items-center gap-12 w-full"
      >
        {/* LEFT TEXT */}
        <div className="w-full">
          <Animate>
            <p className="text-gray-400 mb-2">
              Hi, I'm Fatima
            </p>
          </Animate>

          <Animate delay={0.2}>
            <h1 className="text-4xl md:text-6xl text-[#FFECEA] font-medium leading-tight">
              Full Stack <br />
              <span className="text-[#A14B58]">Web Developer</span>
            </h1>
          </Animate>

          <Animate delay={0.4}>
            <p className="text-gray-400 max-w-xl mt-6">
              I build clean, responsive and animated web applications
              with modern technologies.
            </p>
          </Animate>

          <Animate delay={0.6}>
            <a href="#projects">
              <button
                className="mt-8 px-8 py-3 rounded-full
                bg-[#6C131F] text-[#FFECEA]
                hover:bg-[#A14B58] transition shadow-lg"
              >
                View Projects
              </button>
            </a>
          </Animate>
        </div>

        {/* RIGHT SPLINE */}
        <Animate delay={0.8}>
          <div className="w-full flex justify-center">
            <div className="w-full h-[360px] md:h-[520px]">
              <Spline
                scene="https://prod.spline.design/YhbBoIqoqgdpD3D4/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Hero;
