import Animate from "./Animate";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#140709] py-24">
      <Animate>
        <div
          className="max-w-xl mx-auto p-10 rounded-2xl
          bg-[#1b0d13] border border-[#A14B58]/30"
        >
          <h2 className="text-3xl text-[#FFECEA] text-center mb-8">
            Get In Touch
          </h2>

          <form className="flex flex-col gap-6">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
            <textarea className="input" rows="4" placeholder="Message" />

            <button
              className="mt-4 py-3 rounded-full
              bg-[#6C131F] text-[#FFECEA]
              hover:bg-[#A14B58] transition"
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

