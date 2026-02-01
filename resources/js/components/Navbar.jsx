import { useState } from "react"
import logo from "../assets/ventiologo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b z-50" style={{ backgroundColor: '#314b6e' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3">
            <img src={logo} alt="Ventio Production logo" title="Ventio Production" className="h-10 w-10 md:h-12 md:w-12 object-contain cursor-pointer" />
            <span className="hidden md:inline-block text-lg font-bold" style={{ color: '#fdfbf0' }}>V E N T I O . P R O D U C T I O N</span>
          </a>
        </div>

        <div className="hidden md:flex gap-8 font-medium" style={{ color: '#fdfbf0', fontFamily: 'Poppins' }}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:opacity-70">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:opacity-70">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:opacity-70">Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:opacity-70">Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:opacity-70">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" style={{ color: '#fdfbf0' }}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2" style={{ backgroundColor: "#314b6e", color: "#fdfbf0", fontFamily: "Poppins"}}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block">Services</a>
          {/* <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="block">Portfolio</a> */}
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block">Contact</a>
        </div>
      )}
    </nav>
  )
}
