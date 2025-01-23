import React from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import Logo from '../../public/assets/Logo.png'
import Image from 'next/image'

const Navbar = ({ onSearch }) => {
  return (
    <nav
      className='flex flex-nowrap justify-between h-32 items-center mb-3 px-8'
      style={{
        backgroundColor: '#A98069'
      }}
    >
      <div>
        <Link href='/'>
          <Image className='p-4' src={Logo} width={140} alt='logo' />
        </Link>
      </div>
      <div>
        <Searchbar onSearch={onSearch} />
      </div>
      <div>
        <Link href='/createActivity'>
          <button className='cursor-pointer text-base rounded-lg bg-white text-[#A98069] font-medium shadow-md hover:bg-[#8C6A54] hover:text-white px-6 py-2 transition duration-300'>
            NUEVA ACTIVIDAD
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
