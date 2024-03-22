import React from 'react'

const Footer = () => {
  return (
  
    <footer className="bg-gray-900 text-white py-8  bottom-0 w-full  dark:bg-dark">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center sm:text-left">
          <p className="text-sm">&copy; PLUTO 2024</p>
        </div>
        <div className="text-center sm:text-right mt-4 sm:mt-0">
          <a href="#" className="text-sm mx-2 hover:text-gray-400">About Us</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-400">Terms of Service</a>
          <a href="#" className="text-sm mx-2 hover:text-gray-400">Contact Us</a>
        </div>
    
      </div>
      <div className='ml-16 text-xs pt-2' >
      <div className='font-light text-gray-400 italic'> Made By Recoded Students team #4
       <br></br> Github -
       <a href='https://github.com/Mohammed-Nazar'  className='hover:text-gray-200'> @Mohammed-Nazar </a>
       <a href='https://github.com/Teebak' className='hover:text-gray-200'> @Teebak </a>
       <a href='https://github.com/BarhamBapirAhmad/BarhamBapirAhmad' className='hover:text-gray-200'> @BarhamBapirAhmad</a>  
          </div>
      </div>
    </footer>
  )
}

export default Footer;