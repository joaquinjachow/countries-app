import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ name, flag, continent, id }) => {
  return (
    <div className='w-72 h-80 text-black bg-[#454545d1]'>
      <Link href={'/home' + id}>
        <div>
          <h3 className='text-black no-underline'>{name}</h3>
        </div>
      </Link>
      <div>
        <Image width={100} height={100} className='bg-transparent w-[90%] max-h-36 align-middle items-center text-center' src={flag} alt='No se encontro la bandera' />
      </div>
      <div className='pt-2'>
        <h3>{continent}</h3>
      </div>
    </div>
  )
}
export default Card
