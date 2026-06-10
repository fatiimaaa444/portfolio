import { useState, useEffect } from "react";
import { FiBriefcase, FiGithub, FiLinkedin, FiFileText, FiX, FiMenu } from "react-icons/fi";

const NAV_LINKS = ["home", "skills", "projects", "contact"];

const HireOption = ({ icon, label, sub }) => (
  <a
    href="mailto:fatima@email.com?subject=Hiring Inquiry"
    className="flex items-center gap-4 px-5 py-4 border border-[#6C131F] text-inherit no-underline hover:bg-[#6C131F] transition-all duration-300"
  >
    <span className="text-[#A14B58]">{icon}</span>
    <div>
      <p className="text-[#FFECEA] text-sm tracking-wide font-semibold mb-0.5 mt-0">
        {label}
      </p>
      <p className="text-[#FFECEA] opacity-40 text-xs tracking-wider m-0">
        {sub}
      </p>
    </div>
  </a>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navClass = scrolled
    ? "bg-[#1b0d13] border-b border-[#A14B58]"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <nav
        className={"fixed top-0 left-0 w-full transition-all duration-500 " + navClass}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <span className="font-serif text-[#FFECEA] text-xl tracking-widest font-bold">
            Fatima<span className="text-[#6C131F]">.</span>
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 list-none m-0 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={"#" + item}
                  className="text-[#FFECEA] opacity-50 no-underline font-serif text-xs tracking-widest uppercase hover:opacity-100 transition-opacity duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModal(true)}
              className="hidden md:flex items-center gap-2 bg-transparent border border-[#6C131F] text-[#FFECEA] px-5 py-2 font-serif text-xs tracking-widest uppercase cursor-pointer hover:bg-[#6C131F] transition-all duration-300"
            >
              <FiBriefcase size={12} />
              Hire Me
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden bg-transparent border-none text-[#c97b82] cursor-pointer p-0"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1b0d13] border-t border-[#A14B58] px-6 pt-5 pb-7">
            <ul className="list-none m-0 p-0 flex flex-col gap-5">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href={"#" + item}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#FFECEA] opacity-50 no-underline font-serif text-xs tracking-widest uppercase hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setModal(true); setMobileOpen(false); }}
                  className="flex items-center gap-2 bg-transparent border border-[#6C131F] text-[#FFECEA] px-5 py-2.5 font-serif text-xs tracking-widest uppercase cursor-pointer hover:bg-[#6C131F] transition-all duration-300"
                >
                  <FiBriefcase size={12} />
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HIRE ME MODAL */}
      {modal && (
        <div
          onClick={(e) => e.target === e.currentTarget && setModal(false)}
          className="fixed inset-0 flex items-center justify-center px-4"
          style={{ zIndex: 99999, background: "rgba(13,3,5,0.9)", backdropFilter: "blur(8px)" }}
        >
          <div className="bg-[#1b0d13] border border-[#6C131F] w-full max-w-md p-10 font-serif">

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[#A14B58] text-xs tracking-widest uppercase m-0 mb-1.5">
                  Available for work
                </p>
                <h2 className="text-[#FFECEA] text-2xl tracking-wide m-0 font-bold">
                  Let's Build Together
                </h2>
              </div>
              <button
                onClick={() => setModal(false)}
                className="bg-transparent border-none text-[#FFECEA] opacity-30 cursor-pointer p-0 hover:opacity-100 transition-opacity duration-200"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#A14B58] opacity-20 mb-8" />

            {/* Options */}
            <div className="flex flex-col gap-3 mb-8">
              <HireOption icon={<FiBriefcase size={15} />} label="Freelance Project" sub="One-time or ongoing" />
              <HireOption icon={<FiFileText size={15} />}  label="Full-time Role"    sub="Open to opportunities" />
              <HireOption icon={<FiBriefcase size={15} />} label="Consultation"      sub="Quick call or review" />
            </div>

            {/* Social row */}
            <div className="flex gap-6 justify-center pt-5 border-t border-[#A14B58]">
              {[
                { icon: <FiLinkedin size={14} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <FiGithub   size={14} />, href: "https://github.com",   label: "GitHub"   },
                { icon: <FiFileText size={14} />, href: "/resume.pdf",          label: "Resume"   },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#FFECEA] opacity-30 no-underline font-serif text-xs tracking-widest uppercase hover:text-[#A14B58] hover:opacity-100 transition-all duration-300"
                >
                  {icon} {label}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;