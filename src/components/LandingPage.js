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
    <div
      className='flex justify-center min-h-screen items-center px-4'
      style={containerStyle}
    >
      <div className='flex flex-col items-center space-y-6 sm:space-y-8 bg-opacity-75 p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg'>
        <h1 className='text-4xl md:text-6xl font-bold text-[#5A4634] tracking-wide text-center'>
          Paises del Mundo
        </h1>
        <Link href='/home'>
          <button className='px-4 sm:px-6 py-2 font-extrabold text-lg sm:text-2xl cursor-pointer border-none rounded-3xl bg-[#A98069] text-[#503A31] w-full sm:w-auto landingBtn'>Ingresar</button>
        </Link>
      </div>
      <style jsx>{`
        .landingBtn {
          position: relative;
        }
        @media (min-width: 640px) {
          .landingBtn {
            overflow: hidden;
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
        }
      `}
      </style>
    </div>
  )
}

export default LandingPage
