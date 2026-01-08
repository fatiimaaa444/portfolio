const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#3b182f] to-[#140709] py-20"
    >
      <div className="max-w-xl mx-auto bg-[#2e101c]/70 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white text-center mb-6">Get in Touch</h2>

        <form className="flex flex-col gap-6">
          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#5e2645] py-2 text-white outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#5e2645] py-2 text-white outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-[#5e2645] py-2 text-white outline-none resize-none"
              required
            />
          </div>

          <button className="mt-4 w-1/3 py-3 bg-[#5e2645]/40 hover:shadow-inner rounded-full text-white transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
