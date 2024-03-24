"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faFilm, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";


const Movies = ({ genresListData }) => {
  const MoviesCategory = ["Top Rate", "Popular", "Now playing", "Upcoming"]; 


  const [mainEl, setmainEl] = useState("Movies");
  const [isOpen, setIsOpen] = useState(false);


  // check search params
  const searchParams = useSearchParams();
  const params = searchParams.get("movies");
  const genreParams = searchParams.get("genre");
  const pageParams = searchParams.get("page");


  useEffect(()=>{
    params == true? setIsOpen(true) : setIsOpen(false);
    setmainEl(params? params: "Movies")
  }, [params])


  
  const handleClick = () => {
      setIsOpen((prev)=> !prev); 
  };


  return (
    <div className="flex flex-col relative py-[2px] px-2 md:mt-0  mt-10 border-b-[.2px] justify-center items-center w-screen md:w-fit pb-4 md:p-0 md:border-none">
     
      <div className="timmana-regular flex items-center hover:shadow-sm dark:hover:shadow-red-600 px-2 py-[2px] rounded-md " onClick={handleClick}>
        <p className="text-xl cha-font" >
        <FontAwesomeIcon className="w-4 pr-1" icon={faFilm}/>
        {mainEl}
        </p>
        <FontAwesomeIcon  className="px-2 text-[10px] active:scale-100" icon={isOpen? faArrowUp: faArrowDown}/>
      </div>
  
        {/* Logic for the menu anitmation && using farmer motion library*/}
      {isOpen?
      <>
        <FontAwesomeIcon className="text-xl absolute top-[75%]" icon={faSortUp} />
        <motion.div
       initial="hidden" 
        animate="visible"
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              delay: .1
            }
          }}}
       className={` bg-white transition-all ease-in duration-100 absolute  max-h-64 w-44 top-[75%] md:top-[75%] md:right-1  mt-3 dark:bg-dark overflow-scroll shadow  rounded-md  p-2 dark:shadow-red-600 z-20`}>
        {MoviesCategory.map((item, i) => (
          <p className="py-3 border-b-[.5px]" key={i}>
            <Link
              href={{
                pathname: `/movies`,
                query: {
                  movies: item,
                  ...(genreParams ? {genre: genreParams}: {}),
                },
                
              }}
            >
              {item}
            </Link>
          </p>
        ))}
      </motion.div>
      </>: ""}
    </div>
  );
};

export default Movies;
