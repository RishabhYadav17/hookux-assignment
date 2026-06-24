import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      title: "Why Us?",
      href: "#home",
    },
    {
      title: "Work",
      href: "#services",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <header
      className="
        bg-black
        text-white
        border-b
        border-gray-800
        relative
        z-50
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-3 items-center">

          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="
                  hover:text-gray-400
                  transition
                "
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="relative flex justify-center">
            <div
              className="
                absolute
                w-32
                h-32
                bg-white
                opacity-5
                blur-3xl
                rounded-full
              "
            />

            <a
              href="#home"
              className="
                relative
                text-4xl
                font-bold
                tracking-[0.2em]
              "
            >
              HookUX
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex justify-end">
            <a href="#contact">
              <button
                className="
                  border
                  border-gray-700
                  rounded-2xl
                  px-8
                  py-3
                  text-sm
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                Book a Call
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden justify-self-end text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  border-b
                  border-gray-800
                  pb-3
                  hover:text-gray-400
                  transition
                "
              >
                {link.title}
              </a>
            ))}

            <a href="#contact">
              <button
                className="
                  mt-4
                  w-full
                  rounded-xl
                  border
                  border-gray-700
                  py-3
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                Book a Call
              </button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;