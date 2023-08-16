import React, { useState } from "react";
import logo from "../../Assets/logo.jpeg";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import Button from "./Button";
import Topbar from "./Topbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <Topbar />
      <nav className="bg-teal-700">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={logo} alt="logo" className="md:cursor-pointer h-16" />
            <div
              className="text-3xl mr-9 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavbarLink />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* {Mobile nav } */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0 mt-20" : "left-[-100%] mt-0"}
        `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavbarLink closeMenu={closeMobileMenu} />
            <div className="py-5">
              <Button onClick={closeMobileMenu} />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
