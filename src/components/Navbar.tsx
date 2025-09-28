import { useState } from "react";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from "../assets/Logo.png"


const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blogs", to: "/blogs" },
  { label: "Careers", to: "/careers" },
  { label: "Projects", to: "/project" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="sticky top-0 z-[100] backdrop-blur-md ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo on the left */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
          </NavLink>
          {/* Desktop Menu on the right */}
          <div className="hidden md:flex space-x-6 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={`text-white font-light text-base`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button on the right */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white ml-2"
            >
              {isOpen ? <X size={28} className="transition-transform duration-300 rotate-90" /> : <div className="bg-[#1A1A1A] p-4 rounded-full" ><HiMenuAlt3 size={24} /></div>}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile - OUTSIDE NAVBAR, so logo always visible */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#181818] z-[60] shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Only the cancel (X) button at the top of sidebar */}
          <div className="flex items-center justify-end px-6 py-6 border-b border-[#222]">
            <div className="bg-[#222] p-2 rounded-full">
              <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none ">
                <X size={28} className="transition-transform duration-300 hover:rotate-90" />
              </button>
            </div>
          </div>
          <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
            {navItems.map((item, idx) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium ${isActive ? 'bg-[#222] text-primary scale-105' : 'text-white hover:bg-[#222] hover:scale-105'}`
                }
                style={{ transition: 'transform 0.2s' }}
              >
                <span style={{ transitionDelay: `${idx * 50}ms` }}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default Navbar
