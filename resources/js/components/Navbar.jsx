import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActive(targetId);
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

        {/* DESKTOP MENU */}
        <div
          className="hidden md:flex gap-8 font-medium"
          style={{ color: "#fdfbf0" }}
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="relative py-1 group"
            >
              {label}
              <motion.span
                layoutId="desktop-underline"
                className="absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full"
                style={{ backgroundColor: "#fdfbf0" }}
                initial={false}
                animate={{ opacity: active === id ? 1 : 0, scaleX: active === id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </a>
          ))}
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

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden px-4 sm:px-6 pb-4 pt-2 space-y-1"
          style={{
            backgroundColor: "#314b6e",
            color: "#fdfbf0",
            fontFamily: "Poppins",
          }}
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="relative block py-2.5 text-base font-medium"
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="mobile-underline"
                  className="absolute left-0 bottom-1 h-0.5 rounded-full"
                  style={{ backgroundColor: "#fdfbf0", width: "2rem" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
