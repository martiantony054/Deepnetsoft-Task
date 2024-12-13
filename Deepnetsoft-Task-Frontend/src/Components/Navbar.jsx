import React from "react";
import { useState } from "react";
import img1 from "../assets/deepsoftnet-logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <header className="flex shadow-[0px_4px_16px_rgba(17,_17,_26,_0.1),_0px_8px_32px_rgba(17,_17,_26,_0.05)] py-4 px-4 sm:px-6 bg-[#151618] font-[sans-serif] min-h-[75px] tracking-wide relative z-50 opacity-95">
        <div className="flex flex-wrap items-center gap-5 w-full max-w-screen-xl mx-auto">
          <img src={img1} alt="logo" className="w-36" />

          <div
            id="collapseMenu"
            className={`${
              menuOpen ? "flex" : "hidden"
            } lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              id="toggleClose"
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>

            <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151618] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              {/* Logo inside Collapse Menu */}
              <li className="mb-6 hidden max-lg:block">
                <img src={img1} alt="logo" className="w-40" />
              </li>

              {/* Menu items */}
              {["Home", "Menu", "Make a reservation", "Contact us"].map(
                (item) => (
                  <li key={item} className="max-lg:border-b max-lg:py-3 px-3">
                    <a
                      href="javascript:void(0)"
                      className={`hover:text-[#007bff] text-white font-semibold block text-[15px] ${
                        item === "Home" ? "text-[#007bff]" : ""
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-4">
            <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;