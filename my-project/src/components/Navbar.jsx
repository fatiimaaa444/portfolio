import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#140709] z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#FFECEA] text-xl">
          Fatima<span className="text-[#6C131F]">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          {["home", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-[#A14B58]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-[#140709] px-6 pb-4 text-gray-300">
          {["home", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="py-2">
              <a href={`#${item}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
