import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-b from-[#100607] to-[#3b182f] flex items-center"
    >
      <div className="mt-30 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
       
        <div>
          <p className="text-gray-300 mb-2 text-sm md:text-base">Hi, I'm Fatima</p>
          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">
            Building the Web,<br /> Front to Back
          </h1>
          <p className="text-gray-300 mt-6 max-w-lg text-sm md:text-base">
            I'm a Full-Stack Web Developer focused on building responsive,
            scalable, and user-friendly web applications using modern
            technologies.
          </p>
          <a href="#contact">
            <button className="mt-8 px-6 py-3 rounded-full bg-[#7d4672]/40 backdrop-blur shadow-md hover:shadow-inner transition">
              Contact Me
            </button>
          </a>
        </div>

        
        <div className="w-full h-96 md:h-[80vh]">
          <Spline scene="https://prod.spline.design/YhbBoIqoqgdpD3D4/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
