"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";


//  input for lg screens 
const SearchInputLg = () => {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchValue) {
            return false;
        }
        else {
            router.push(`/movies/?search=${searchValue}`)
        }
    };


  return (
    <form onSubmit={handleSubmit}>
    <FontAwesomeIcon
        
         className={`w-4 absolute p-2 `}  icon={faMagnifyingGlass}/>
        <input 
        value={searchValue}
        onChange={({target})=> setSearchValue(target.value)}
         className={`w-44 py-1 px-2 pl-7 rounded-md outline-none focus:outline-red-800 focus:outline-[.5px]`} type="text" placeholder="Search Movie"/>
        </form>
  )
}

export default SearchInputLg