"use client";
import React, { useEffect, useState } from "react";
import Genres from "./Genres";
import ThemeSwitcher from "../../Theme/ThemeSwitcher";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Movies from "./Movies";
import Actors from "../navComponents/Actors";
import SerchInput from "../navComponents/SerchInput";
import TvShows from "../navComponents/TvShows";

// The component just for small screens
const HumburgerMenu = ({ genresListData, params }) => {
  const [isOpen, setIsOpen] = useState(false);


  const searchParams = useSearchParams();
  const pathname = usePathname();
  

  // Logic to ceck if there is a query parameter close the burger mwnu
  useEffect(() => {
    searchParams.toString() == true ? setIsOpen(true) : setIsOpen(false);
    pathname > 1 ? setIsOpen(true) : setIsOpen(false);
  }, [searchParams.toString(), pathname]);



  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "relative" : "block"
      } transition-colors duration-200 ease-in`}
    >

          {/* Logic for the menu anitmation && using farmer motion library*/}
      {isOpen? <motion.div
        initial="hidden" 
        animate="visible"
        variants={{
          hidden: {
            scale: .3,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .1
            }
          }
        }}
        className={`z-30 text-center pt-2 absolute top-[100%] bg-white right-[-5vw]  h-screen md:h-fit dark:bg-dark w-screen  flex flex-col  items-center ${
          isOpen ? " visible" : "hidden opacity-0"
        } `}
      >

      {/* Nav items */}
        <span className="mt-2 mx-4  self-end md:hidden">
          <ThemeSwitcher />
        </span>
        <span className="mt-2">
          <Genres genresListData={genresListData} />
        </span>
        <span className="mt-2">
          <Movies />
        </span>
        <span className="mt-2">
          <TvShows />
        </span>
        <span className="mt-2">
          <Actors/>
        </span>
        <span className="mt-2">
        <SerchInput/>
        </span>
          {/*  */}

      </motion.div>: ""}

      {/* the burger elemnt animation when clicked */}
      <motion.div whileTap={{
        scale: 0.5
      }}>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center md:hidden relative transition-all dark:text-red-600"
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      </motion.div>

      {/*              */}
    </div>
  );
};

export default HumburgerMenu;
