import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#140709] fixed w-full z-50 px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-semibold">
          Fatima<span className="text-[#a7376f]">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-[#9f5b7d] hover:underline underline-offset-7 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#140709] flex flex-col gap-4 mt-4 p-4 rounded shadow-md">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:underline transition-colors duration-300 text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
