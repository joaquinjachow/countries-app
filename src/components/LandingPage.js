import React from 'react'
import background from '../../public/assets/Mapamundo_pi.jpg'
import Link from 'next/link'

export default function LandingPage () {
  const containerStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  console.log(background)
  return (
    <div className='flex justify-center min-h-screen items-center' style={containerStyle}>
      <div className='flex flex-col'>
        <h1 className='text-6xl text-[#3A301A]'>Paises del mundo</h1>
        <Link href='/home'>
          <button className='px-4 py-2 font-extrabold text-xl cursor-pointer border-none rounded-3xl overflow-hidden bg-[#A98069] text-[#503A31]'>Ingresar</button>
        </Link>
      </div>
    </div>
  )
}
