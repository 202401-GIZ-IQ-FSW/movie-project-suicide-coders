import React from 'react'
import Genres from './dropDownBtn/Genres'
import { genresList } from '@/data/API/mainApi'
import ThemeSwitcher from './Theme/ThemeSwitcher';
import HumburgerMenu from './dropDownBtn/HumburgerMenu';

async function Navbar(){
  const genresListData = await genresList();

  return (
    <nav className='flex justify-between pl-10 pr-5 py-5'>
      <h1>PLUTO</h1>
      <HumburgerMenu genresListData={genresListData}  />
    </nav>
  )
}

export default Navbar