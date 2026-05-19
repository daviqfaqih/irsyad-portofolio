import { useState, useEffect } from "react";
import { Menu, X, Rocket, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-[#050816]/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* LOGO & STATUS SECTION */}
          <div className="flex items-center gap-3">
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="text-white w-6 h-6" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  IRS<span className="text-[#7C3AED]">YAD</span>
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full w-fit">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                    Available for work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeLink === link.name ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#7C3AED] rounded-full -z-10 shadow-lg shadow-purple-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-white/10 mx-2" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all"
            >
              Hire Me
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] md:hidden bg-[#050816]/95 backdrop-blur-2xl z-40 px-8 pt-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-white flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight size={32} className="text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;