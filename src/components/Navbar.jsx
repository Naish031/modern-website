import React, { useState } from "react";
import { logo, close, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full overflow-hidden py-[2%]">
      <img
        src={logo}
        alt=""
        className="sm:w-[125px] sm:h-[25px] w-[70px] h-[20px]"
      />

      <ul className="hidden sm:flex items-center gap-10 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-base font-poppins text-dimWhite cursor-pointer"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile view */}

      <div className="sm:hidden flex flex-1 justify-end items-center gap-10 relative">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] cursor-pointer object-contain z-30"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
        {toggle && (
          <div className="fixed top-12 right-0 w-1/2 h-[35vh] bg-opacity-90 bg-black-gradient sidebar flex flex-col items-center justify-center rounded-md">
            <ul className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-base font-poppins text-dimWhite cursor-pointer"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
