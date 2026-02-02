import { useState } from "react";

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
    <nav
      className="fixed top-0 w-full backdrop-blur border-b z-50"
      style={{ backgroundColor: "#314b6e" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3"
        >
          <img
            src="/images/ventiologo.png"
            alt="Ventio Production Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <span
            className="hidden md:inline-block text-lg font-bold"
            style={{ color: "#fdfbf0", fontFamily: "Pairfly" }}
          >
            V E N T I O . P R O D U C T I O N
          </span>
        </a>

        <div
          className="hidden md:flex gap-8 font-medium"
          style={{ color: "#fdfbf0", fontFamily: "Poppins" }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          style={{ color: "#fdfbf0" }}
        >
          ☰
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-6 pb-4 space-y-2"
          style={{
            backgroundColor: "#314b6e",
            color: "#fdfbf0",
            fontFamily: "Poppins",
          }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>
      )}
    </nav>
  );
}
