import Animate from "./Animate";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#140709] py-24">
      <Animate>
        <div
          className="max-w-xl mx-auto p-10 rounded-2xl
          bg-[#1b0d13] border border-[#A14B58]/30
          shadow-lg shadow-[#A14B58]/20"
        >
          <h2 className="text-3xl font-semibold text-[#FFECEA] text-center mb-8">
            Get In Touch
          </h2>

          <form className="flex flex-col gap-6">
            <input
              className="input bg-[#1e0f15] text-[#FFECEA] placeholder:text-gray-400
              p-3 rounded-lg border border-[#A14B58]/20
              focus:outline-none focus:ring-2 focus:ring-[#A14B58] focus:border-transparent
              transition-all duration-300"
              placeholder="Name"
            />
            <input
              className="input bg-[#1e0f15] text-[#FFECEA] placeholder:text-gray-400
              p-3 rounded-lg border border-[#A14B58]/20
              focus:outline-none focus:ring-2 focus:ring-[#A14B58] focus:border-transparent
              transition-all duration-300"
              placeholder="Email"
            />
            <textarea
              className="input bg-[#1e0f15] text-[#FFECEA] placeholder:text-gray-400
              p-3 rounded-lg border border-[#A14B58]/20
              focus:outline-none focus:ring-2 focus:ring-[#A14B58] focus:border-transparent
              transition-all duration-300 resize-none"
              rows="4"
              placeholder="Message"
            />

            <button
              type="submit"
              className="mt-4 py-3 rounded-full
              bg-[#6C131F] text-[#FFECEA] font-medium
              hover:bg-[#A14B58] hover:shadow-md
              transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Animate>
    </section>
  );
};

export default Contact;