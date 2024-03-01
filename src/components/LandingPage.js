import React from 'react'
import background from '../../public/assets/Mapamundo_pi.jpg'
import Link from 'next/link'

const LandingPage = () => {
  const containerStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <div className='flex justify-center min-h-screen items-center' style={containerStyle}>
      <div className='flex flex-col items-center space-y-5'>
        <h1 className='text-6xl text-[#3A301A]'>Paises del mundo</h1>
        <Link href='/home'>
          <button className='px-4 py-2 font-extrabold text-xl cursor-pointer border-none rounded-3xl overflow-hidden bg-[#A98069] text-[#503A31] landingBtn'>Ingresar</button>
        </Link>
      </div>
      <style jsx>{`
        .landingBtn {
          position: relative;
        }
        .landingBtn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: #2f211b;
          width: 120%;
          left: -10%;
          transform: skew(30deg);
          transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
        }
        .landingBtn:hover::before {
          transform: translate3d(100%, 0, 0);
        }
      `}
      </style>
    </div>
  )
}
export default LandingPage
