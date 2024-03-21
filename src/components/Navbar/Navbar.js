import React from 'react'
import Genres from './dropDownBtn/Genres'
import { genresList } from '@/data/API/mainApi'
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import HumburgerMenu from './dropDownBtn/HumburgerMenu';
import NavForLg from './navComponents/NavForLg';
import Link from 'next/link';

async function Navbar(){
  // list of genres
  const genresListData = await genresList();

  return (
    <nav className='flex justify-between pl-10 pr-5 py-8 '>
    {/* when logo clicked it redirect to main page */}
      <Link href={{
        pathname: `/`,
      }}>
      <h1 className='font-bold text-2xl cursor-pointer'>PLUTO</h1>
      </Link>

      {/* nav for small screens */}
      <HumburgerMenu genresListData={genresListData} className="md:hidden"  />

      {/* nav for lg screens */}
      <NavForLg genresListData={genresListData}/>
    </nav>
  )
}

export default Navbar