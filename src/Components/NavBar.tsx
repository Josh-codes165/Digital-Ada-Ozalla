import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home", "About Us", "Our Activities", "Events", "Gallery", "Stories", "Contact",
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-[#E7E5DF] bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 md:mx-20">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
          D<span className="text-green-700">A</span>O
        </h1>

        <ul className="hidden lg:flex flex-row gap-6 xl:gap-8 text-base font-bold text-black">
          {navLinks.map((link) => (
            <li key={link} className="relative group cursor-pointer whitespace-nowrap">
              <span className="group-hover:text-green-700 transition-colors">{link}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <button className="hidden lg:block bg-green-950 hover:bg-green-800 text-white text-base font-black px-7 py-3.5 rounded-lg transition-colors hover:scale-105 duration-200">
          Join Us
        </button>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 shrink-0"
        >
          <span className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col gap-6 px-6 sm:px-10 pb-8 pt-2 text-base font-bold text-black">
          {navLinks.map((link, index) => (
            <li
              key={link}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              className={`hover:text-green-700 transition-all duration-300 cursor-pointer ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {link}
            </li>
          ))}
          <button className="w-fit bg-green-950 hover:bg-green-800 text-white text-base font-black px-7 py-3.5 rounded-lg transition-colors">
            Join Us
          </button>
        </ul>
      </div>
    </div>
  );
}