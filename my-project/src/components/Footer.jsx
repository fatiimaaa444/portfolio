const Footer = () => {
  return (
    <footer className="bg-[#140709] py-6 text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} Fatima — Full Stack Web Developer
      </p>

      <div className="flex justify-center  gap-6 mt-4 text-lg ">
       
          <a href="https://wa.me/+923054442226"><i className="hover:text-[#a1627b8f] fa-brands fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/coding_with_her/"><i className="hover:text-[#a1627b8f] fa-brands fa-instagram"></i></a>
          <a href="https://github.com/fatiimaaa444"><i className="hover:text-[#a1627b8f] fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/fatima-nazir-413018261/"><i className="hover:text-[#a1627b8f] fa-brands fa-linkedin-in"></i></a>
        </div>



    </footer>
  );
};

export default Footer;
