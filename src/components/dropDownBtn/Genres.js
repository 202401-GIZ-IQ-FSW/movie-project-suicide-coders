"use client"
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Genres = ({genresListData}) => {

  return (
    <div className=' relative border-[1px] py-[2px] px-2 rounded'>
     <Menu>
      <Menu.Button>Genres <FontAwesomeIcon className='ml-2' icon={faArrowDown}/></Menu.Button>
      <div className='absolute'>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
      <Menu.Items>
      <div className='flex flex-col h-64 overflow-scroll mr-5 mt-1'>
        {genresListData.genres.map((genres)=>
          <Menu.Item key={genres.id} as={Fragment}>
            <Link href={{
              pathname: `/`,
              query: {
                genre: genres.name
              }
            }}>
              {genres.name}
            </Link>
          </Menu.Item>
        )}
        </div>
      </Menu.Items>
      </Transition>
      </div>
    </Menu>
    </div>
    )
}

export default Genres