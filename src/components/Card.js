import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ name, flag, continent, id }) => {
  return (
    <div className='w-full h-64 max-w-xs mb-10 p-4 font-medium transition-all duration-500 ease-in-out bg-gray-200 rounded-md shadow-lg shadow-slate-400 hover:scale-105 hover:shadow-xl'>
      <div className='space-y-4 text-center'>
        <div>
          <Link href={'/home' + id}>
            <div>
              <h3 className='text-black no-underline'>{name}</h3>
            </div>
          </Link>
        </div>
        <div>
          <Image width={100} height={1} className='bg-transparent w-[90%] mx-auto max-h-36' src={flag} alt='No se encontro la bandera' />
        </div>
        <div>
          <h3>{continent}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card
