import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },

    {
      label: "Branch",
      submenu: [
        { label: "Rajendra Nagar", path: "/branch/rajendra-nagar" },
        { label: "Jagdeo Path", path: "/branch/jagdeo-path" },
      ],
    },
  ];

  return (
    <>
      <nav className="w-full bg-red-600 border-b-4 border-yellow-400 shadow-lg relative z-50">
        <div className="w-full px-4 lg:px-12">

          {/* NAVBAR TOP */}
          <div className="flex items-center justify-between h-24">

            {/* LOGO */}
            <div className="flex items-center pl-1 md:pl-2">
              <img
                src={logo}
                alt="Logo"
                className="h-12 md:h-16 object-contain rounded-xl drop-shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-10 text-white font-bold text-lg md:text-xl">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                >

                  {!link.submenu ? (
                    <>
                      <Link to={link.path}>{link.label}</Link>

                      <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </>
                  ) : (
                    <>
                      {/* BRANCH TITLE */}
                      <div className="flex items-center gap-1 py-2">
                        {link.label}
                        <ChevronDown
                          size={18}
                          className="group-hover:rotate-180 transition duration-300"
                        />
                      </div>

                      {/* DROPDOWN FIXED */}
                      <div
                        className="
                          absolute top-full left-0 pt-2
                          opacity-0 invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all duration-300
                          z-50
                        "
                      >
                        <div
                          className="
                            min-w-[220px]
                            bg-red-600
                            border border-white/20
                            rounded-xl
                            shadow-2xl
                            overflow-hidden
                            backdrop-blur-xl
                          "
                        >
                          {link.submenu.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="
                                block
                                px-5 py-3
                                text-white
                                text-[15px]
                                font-medium
                                border-b border-white/10
                                last:border-none
                                hover:bg-yellow-400
                                hover:text-red-700
                                transition duration-300
                              "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* SOCIAL ICONS */}
            <div className="hidden md:flex items-center gap-5 text-white pr-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 hover:text-yellow-300 hover:scale-110 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bscacademy.patna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 hover:text-yellow-300 hover:scale-110 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.75-3.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@BSCAcademyPatna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 hover:text-yellow-300 hover:scale-110 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-20 right-3 w-[70%]
        bg-red-600 border border-white/20 rounded-2xl shadow-2xl z-50
        transform transition-all duration-300 ease-in-out overflow-hidden
        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >

        {/* MOBILE LINKS */}
        <ul className="flex flex-col gap-4 text-white font-semibold text-lg p-5">

          {navLinks.map((link, index) => (
            <li key={index}>

              {!link.submenu ? (
                <Link
                  to={link.path}
                  className="block border-b border-white/20 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <div className="border-b border-white/20 pb-2 flex items-center gap-2">
                    {link.label}
                  </div>

                  <div className="ml-4 mt-3 flex flex-col gap-3 text-base">
                    {link.submenu.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="text-red-100 hover:text-yellow-300 transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}

            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;