import { Link } from "react-scroll";
import Logo from "../ressources/logos_linux-tux.svg";
import { TextOfLogo } from "./Components";
import Drop from "./Drop";
import NavItem from "./NavItem";
import Popup from "./Popup";
import React, { useState, useEffect } from "react";
const Nav = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [borderWidth, setBorderWidth] = useState("0px");

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [btnColor, setBtnColor] = useState('bg-[#050708] text-white');
  const [isPop,setIsPop]=useState(false)
  const handleClosingBurger = () => {
    if (window.innerWidth >= 1024) {
      setIsBurgerOpen(false);
    }
  };

  const handleBurgerClick = () => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
      setnavSize("10rem");
    } else {
      setIsBurgerOpen(true);
      setnavSize("auto");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleClosingBurger, false);
    return () => {
      window.removeEventListener("resize", handleClosingBurger);
    };
  }, []);

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? (setnavColor("#020F13"), setBorderWidth("1px"), setBtnColor('bg-white text-dark'))
      : (setnavColor("transparent"), setBorderWidth("0px"), setBtnColor('bg-[#050708] text-white'));
    window.innerWidth >= 1024
      ? window.scrollY > 10
        ? setnavSize("5rem")
        : setnavSize("10rem")
      : window.scrollY > 10
        ? setnavSize("5rem")
        : setnavSize("8rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <header
      className={`flex fixed w-full top-0 left-0 z-50 lg:px-5 px-4 py-5 border-raven transition-[height_1s_linear] duration-1000
       ${isBurgerOpen
          ? "flex-col top-section"
          : "flex-row items-center justify-between"
        }`}
      style={{
        backgroundColor: navColor,
        height: navSize,
        borderBottomWidth: borderWidth,
        transition: "all 0.7s ease-in-out",
      }}
    >
      {/* LOGO */}
      <div className="flex lg:w-auto w-full lg:block justify-between items-center">
        <Link to="hero" className="cursor-pointer"
        smooth={true}
        duration={500}>
          <div className="flex items-center justify-between ">
            <div className="mr-3">
              <img src={Logo} className=" w-12 lg:w-16 h-auto" />
            </div>
            <TextOfLogo />
          </div>
        </Link>

        {/* BURGER BUTTON FOR SMALL SCREEN */}
        <button
          className="lg:hidden flex flex-col relative"
          onClick={() => handleBurgerClick()}
        >
          <span
            className={`w-6 h-1 bg-white mb-1 transition-[transform_0.5s] duration-500 ${isBurgerOpen
              ? " -translate-x-1/2 rotate-45 absolute -translate-y-1/2 top-1/2 left-1/2"
              : ""
              }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white mb-1 transition-opacity ${isBurgerOpen ? "opacity-0" : " delay-100"
              }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white mb-1 transition-[tranform_0.7s] duration-700 ${isBurgerOpen
              ? " -translate-x-1/2 -rotate-45 bg-red-300 absolute -translate-y-1/2 top-1/2 left-1/2 "
              : ""
              }`}
          ></span>
        </button>
      </div>

      {/* MENU FOR LARGE SCREEN AND WHEN BURGER IS OPEN FOR SMALL SCREEN */}
      <div
        className={`lg:flex items-center leading-5 gap-10  ${isBurgerOpen
          ? "flex flex-col justify-start space-y-5 h-full py-10 top-11 "
          : "hidden -top-10"
          }`}
      >

        <NavItem to="/about">À propos</NavItem>
        <Drop />
        <NavItem>Archive</NavItem>
        <NavItem>FaQ</NavItem>

        <button
          type="button"
          onClick={()=>setIsPop(!isPop)}
          className={`${btnColor} font-DMMono hover:bg-[#050708]/90  focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2`}
        >
          Inscription
        </button>
      </div>
      {isPop && (
        <Popup/>
      )}
    </header>
  );
};
export default Nav;
