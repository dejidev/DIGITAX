import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';


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
    <nav className="shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              // className={({ isActive }) =>
              //   `hover:text-primary transition-colors ${isActive ? "text-primary font-semibold" : "text-gray-700"
              //   }`
              // }
              className={`text-white font-light text-[18px]`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-primary ${isActive ? "text-primary font-semibold" : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
