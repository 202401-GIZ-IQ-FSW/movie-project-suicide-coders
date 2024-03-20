"use client"
import React, { useState } from 'react';
import Genres from "./Genres"
import ThemeSwitcher from '../Theme/ThemeSwitcher';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

 const HumburgerMenu = ({genresListData}) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

return(
    <div className={isOpen? "relative": "block"}>

<div className={`absolute top-[100%] right-[-30%]  h-screen bg-white dark:bg-dark w-screen  flex flex-col  items-center ${isOpen? "block": "hidden"} `}>
 <span  className='m-2'>

  <ThemeSwitcher />

 </span>
  <span className='m-2'>

  <Genres genresListData={genresListData}/>
  
</span>
  </div>
  <button  onClick={handleClick}
  className="flex flex-col justify-center items-center lg:hidden relative transition-all">
  {isOpen? <FontAwesomeIcon  icon={faClose}/>:<FontAwesomeIcon  icon={faBars}/>}
  </button>
  </div>
  
)
};

export default HumburgerMenu;