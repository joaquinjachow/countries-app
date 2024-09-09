import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useStore from '../store/zustandStore'

const Detail = () => {
  const { getCountries, countries } = useStore()

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className='container mx-auto pt-20'>
      {countries.length > 0
        ? (
          <div className='flex flex-col items-center'>
            <div className='bg-white p-16 rounded-lg shadow-lg shadow-slate-500 border border-gray-300 flex flex-col md:flex-row items-center max-w-4xl'>
              <div className='flex-shrink-0 mb-6 md:mb-0 md:mr-8'>
                <Image
                  width={300}
                  height={200}
                  className='w-full h-auto object-cover rounded-lg'
                  src={countries[0].flag}
                  alt={`Bandera de ${countries[0].name}`}
                />
              </div>
              <div className='text-lg flex-grow'>
                <h1 className='text-4xl font-bold mb-4 text-center md:text-left'>{countries[0].name}</h1>
                <div className='space-y-2'>
                  <p><strong>ID:</strong> {countries[0].id}</p>
                  <p><strong>Capital:</strong> {countries[0].capital}</p>
                  <p><strong>Continente:</strong> {countries[0].subregion}</p>
                  <p><strong>Área:</strong> {countries[0].area} km²</p>
                  <p><strong>Población:</strong> {countries[0].population}</p>
                </div>
              </div>
            </div>

            {countries[0].activities.length > 0 && (
              <div className='mt-8 bg-[#8fa4cf81] p-6 rounded-lg shadow-md border border-black max-w-4xl w-full'>
                <h2 className='text-2xl font-bold mb-4'>Actividades:</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {countries[0].activities.map((e) => (
                    <div key={e.id} className='text-lg'>
                      <p><strong>Nombre:</strong> {e.name}</p>
                      <p><strong>Dificultad:</strong> {e.dificulty}</p>
                      <p><strong>Duración:</strong> {e.duration}</p>
                      <p><strong>Temporada:</strong> {e.season}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          )
        : (
          <p className='text-3xl font-bold text-center'>Cargando...</p>
          )}

      <div className='flex justify-center mt-8'>
        <Link href='/home'>
          <button className='px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300'>
            Volver
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Detail
