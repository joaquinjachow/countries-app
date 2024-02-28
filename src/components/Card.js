import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ name, flag, continent, id }) => {
  return (
    <div className='text-black bg-[#454545d1] h-60'>
      <div className='space-y-4 pt-3 text-center'>
        <div>
          <Link href={'/home' + id}>
            <div>
              <h3 className='text-black no-underline'>{name}</h3>
            </div>
          </Link>
        </div>
        <div>
          <Image width={100} height={1} className='bg-transparent w-[90%] mx-auto' src={flag} alt='No se encontro la bandera' />
        </div>
        <div>
          <h3>{continent}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card
