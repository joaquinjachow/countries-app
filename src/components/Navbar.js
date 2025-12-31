import React from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import Logo from '../../public/assets/Logo.png'
import Image from 'next/image'

const Navbar = ({ onSearch }) => {
  return (
    <nav
      className='flex flex-col sm:flex-row flex-nowrap justify-between items-center min-h-32 sm:h-32 shadow-md mb-3 px-4 sm:px-8 py-4 sm:py-0 gap-4 sm:gap-0'
      style={{
        backgroundColor: '#A98069'
      }}
    >
      <div className='order-1 sm:order-1'>
        <Link href='/'>
          <Image className='p-2 sm:p-4 cursor-pointer' src={Logo} width={120} height={60} alt='logo' />
        </Link>
      </div>
      <div className='order-2 sm:order-2 w-full sm:w-auto'>
        <Searchbar onSearch={onSearch} />
      </div>
      <div className='order-3 sm:order-3'>
        <Link href='/createActivity'>
          <button className='cursor-pointer text-sm sm:text-base rounded-lg bg-white text-[#A98069] font-medium shadow-md hover:bg-[#8C6A54] hover:text-white px-4 sm:px-6 py-2 transition duration-300 whitespace-nowrap'>
            NUEVA ACTIVIDAD
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
