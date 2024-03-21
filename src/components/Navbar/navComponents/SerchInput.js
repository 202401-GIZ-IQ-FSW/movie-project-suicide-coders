import { faClose, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useState } from "react";
import { useRouter } from "next/navigation";


//  input for small screens
const SerchInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");


    const router = useRouter();

    const handleClick = () => {
        setIsOpen((prev)=> !prev); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchValue) {
            return false;
        }
        else {
            router.push(`/movies/?search=${searchValue}`)
            setIsOpen(false);
        }
    };
  

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
    <div className="mt-10 md:mt-0 relative">
        <FontAwesomeIcon
         className={`absolute text-xl top-1 pl-2 left-0 border-r-[.5px] pr-2`} icon={faMagnifyingGlass}/>
        <div>
        <input 
        value={searchValue}
        onChange={({target})=> setSearchValue(target.value)}
         className={`visible md:absolute md:w-24 md:pr-10 py-1 px-7 pl-10 rounded-md outline-none focus:outline-red-800 focus:outline-[.5px]`} type="text" placeholder="Search Movie"/>
        </div>
        
    </div>
    <motion.div
    initial="hidden" 
        animate="visible"
        variants={{
          hidden: {
            scale: .1,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .2
            }
          }}}
    >
        <motion.button onClick={handleSubmit} whileTap={{
        scale: .8
    }} className="mt-5 md:w-fit md:text-sm md:m-0 px-3 py-1 text-lg drop-shadow-2xl shadow dark:bg-red-600 rounded-md bg-opacity-70">Sreach</motion.button>
    </motion.div>
    </form>
  )
}

export default SerchInput