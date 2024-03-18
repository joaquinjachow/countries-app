import React from 'react'
import Link from 'next/link'
import SearchBar from './Searchbar'
import Logo from '../../public/assets/Logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex flex-nowrap justify-between h-32 w-auto content-start items-center mb-3' style={{ backgroundImage: "url('/assets/Banner.jpeg')", backgroundSize: 'cover' }}>
      <div>
        <Link href='/'>
          <Image className='mx-12 p-8' src={Logo} width={160} alt='logo' />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Link href='/activity' className='no-underline'>
          <button className='cursor-pointer border-none bg-none h-6 w-auto text-white text-sm m-1 justify-between flex flex-row-reverse items-center content-start pr-16 tracking-wide border-b border-transparent transition-border duration-200'>NUEVA ACTIVIDAD</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
