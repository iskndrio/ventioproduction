import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full backdrop-blur z-50 shadow-sm"
      style={{ backgroundColor: "#314b6e" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src="/images/ventiologo.png"
            alt="Ventio Production Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
          />
          <span
            className="hidden md:inline-block text-lg font-bold"
            style={{ color: "#fdfbf0", fontFamily: "Pairfly" }}
          >
            V E N T I O &nbsp; P R O D U C T I O N
          </span>
          <span
            className="inline-block md:hidden text-sm font-semibold tracking-wide"
            style={{ color: "#fdfbf0", fontFamily: "Poppins" }}
          >
            VENTIO
          </span>
        </a>

        <div
          className="hidden md:flex gap-8 font-medium"
          style={{ color: "#fdfbf0" }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")}>Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ color: "#fdfbf0" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-4 sm:px-6 pb-4 pt-2 space-y-1"
          style={{
            backgroundColor: "#314b6e",
            color: "#fdfbf0",
            fontFamily: "Poppins",
          }}
        >
          <a className="block py-2.5 text-base font-medium" href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a className="block py-2.5 text-base font-medium" href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a className="block py-2.5 text-base font-medium" href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a className="block py-2.5 text-base font-medium" href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")}>Portfolio</a>
          <a className="block py-2.5 text-base font-medium" href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
}
