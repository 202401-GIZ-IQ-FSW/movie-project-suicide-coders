"use client"
import React from 'react'
import Genres from './dropDownBtn/Genres'
import Movies from './dropDownBtn/Movies'
import Actors from './Actors'
import ThemeSwitcher from '../Theme/ThemeSwitcher'
import SearchInputLg from './SearchInputLg'

// Nav for lg screens 
const NavForLg = ({genresListData}) => {
  return (
    
        <ul className=' lg:gap-x-14 md:gap-x-8  grid-cols-5 hidden md:flex '>
            <li>
                <Genres genresListData={genresListData} />
            </li>
            <li>
                <Movies />
            </li>
            <li>
                <Actors/>
            </li>
            <li>
                <SearchInputLg/>
            </li>
            <li className='gap-0'>
                <ThemeSwitcher/>
            </li>
        </ul>

  )
}

export default NavForLg