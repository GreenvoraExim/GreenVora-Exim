import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const navLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About Us", path: "/about" },
  { id: "services", label: "Services", path: "/services" },
  { id: "products", label: "Products", path: "/products" },
  { id: "contact", label: "Contact Us", path: "/contact" },
];

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/products" &&
      location.pathname.startsWith("/products/"));

  const handleLinkClick = (link) => {
    if (link.id === "home") {
      if (location.pathname === "/" && scrollToSection) {
        scrollToSection("home");
      } else {
        navigate("/");
      }
    } else {
      navigate(link.path);
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-4
        left-1/2
        z-50
        w-[95%]
        lg:w-[92%]
        max-w-[1450px]
        -translate-x-1/2
        bg-white
        border
        border-gray-200
        shadow-lg
        px-4
        sm:px-6
        lg:px-10
        xl:px-12
        py-2
        rounded-[2rem]
      "
    >
      <div className="flex items-center justify-between">

        {/* Logo + Company Name */}
        <div
          className="flex items-center gap-3 lg:gap-4 cursor-pointer"
          onClick={() => handleLinkClick(navLinks[0])}
        >
          {/* Logo container - navbar height stays compact */}
          <div
            className="
              h-14 w-14
              lg:h-16 lg:w-16
              overflow-hidden
              rounded-full
              flex-shrink-0
              flex
              items-center
              justify-center
            "
          >
            <img
              src={logo}
              alt="GreenVora Exim Logo"
              className="
                w-full
                h-full
                object-cover
                scale-[1.45]
              "
            />
          </div>

          {/* Company Name */}
          <span
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              xl:text-[32px]
              font-bold
              bg-gradient-to-r
              from-emerald-800
              to-emerald-600
              bg-clip-text
              text-transparent
              whitespace-nowrap
            "
          >
            GreenVora Exim
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center lg:gap-3 xl:gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link)}
              className={`
                px-3
                lg:px-5
                xl:px-6
                py-2
                text-base
                lg:text-lg
                xl:text-xl
                font-semibold
                rounded-xl
                transition-all
                duration-200
                whitespace-nowrap
                ${
                  isActive(link.path)
                    ? "text-emerald-800 bg-emerald-50"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            md:hidden
            p-2
            hover:bg-gray-100
            rounded-lg
            transition-colors
          "
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 pt-2 pb-3 border-t border-gray-100">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link)}
                className={`
                  block
                  w-full
                  text-left
                  py-3
                  px-4
                  rounded-xl
                  font-medium
                  transition-colors
                  ${
                    isActive(link.path)
                      ? "text-emerald-700 bg-emerald-50 font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
