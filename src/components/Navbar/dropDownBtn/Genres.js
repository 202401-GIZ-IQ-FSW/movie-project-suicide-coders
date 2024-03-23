"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faBarsStaggered,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";



const Genres = ({ genresListData }) => {
  const [genresEl, setGenresEl] = useState("Genres");
  const [isOpen, setIsOpen] = useState(false);

  // checking search params
  const searchParams = useSearchParams();
  const genreParams = searchParams.get("genre");

  // close genres menu if clicked
  useEffect(() => {
    searchParams.get("genre") == true ? setIsOpen(true) : setIsOpen(false);
    setGenresEl(genreParams ? genreParams : "Genres");
  }, [searchParams.get("genre")]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col relative py-[2px] px-2 mt-[20%] md:mt-0 border-b-[.2px] w-screen md:w-fit justify-center items-center pb-4 md:border-none md:p-0">
      
      
      <div
        className="flex items-center hover:shadow-sm dark:hover:shadow-red-600 px-2 py-[2px] rounded-md"
        onClick={handleClick}
      >
        <p className="text-xl cha-font">
       <FontAwesomeIcon className="w-4" icon={faBarsStaggered}/> {genresEl}</p>

        <FontAwesomeIcon
          className="px-2 text-[10px] active:scale-100"
          icon={isOpen ? faArrowUp : faArrowDown}
        />
      </div>

      {/* Logic for the menu anitmation && using farmer motion library*/}
      {isOpen ? (
        <>
          <FontAwesomeIcon
            className="text-xl absolute top-[75%]"
            icon={faSortUp}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
            className={`${
              isOpen ? "flex flex-col" : "hidden"
            } bg-white z-10 absolute max-h-64 w-44 top-[75%] right md:top-[75%] md:right-1 mt-3 dark:bg-dark overflow-scroll shadow  rounded-md  p-2 dark:shadow-red-600 `}
          >
            {genresListData.genres.map((genres) => (
              <p className="py-3 border-b-[.5px]" key={genres.id}>
                <Link
                  href={{
                    pathname: `/movies`,
                    query: {
                      genre: genres.name,
                    },
                  }}
                >
                  {genres.name}
                </Link>
              </p>
            ))}
          </motion.div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Genres;
