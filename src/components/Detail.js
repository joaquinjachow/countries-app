import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useStore from '../store/zustandStore'

const Detail = (props) => {
  const { getCountries, countries } = useStore()
  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div>
      {
        countries.length > 0
          ? <div className='grid grid-cols-3 pt-36 justify-center items-center'>
            <div>
              <Image className='w-full pl-10' src={countries[0].flag} alt='Bandera del Pais' />
            </div>
            <div className='w-96 h-96 text-lg bg-[#cfa48f81] rounded-sm border border-black'>
              <h1>Nombre: {countries[0].name}</h1>
              <h2>Id: {countries[0].id}</h2>
              <h2>Capital: {countries[0].capital}</h2>
              <h2>Continente: {countries[0].subregion}</h2>
              <h2>Area: {countries[0].area} km²</h2>
              <h2>Poblacion: {countries[0].population}</h2>
            </div>
            <div className='w-96 h-[400px] text-lg border-rounded border border-black bg-[#cfa48f81]'>
              {countries[0].activities.length ? <h1><b>Activities:</b></h1> : ''}
              {countries[0].activities?.map(e =>
                <div key={e.id}>
                  <ul className='flex h-24 flex-col pl-0'>
                    <h2>Nombre: {e.name}</h2>
                    <h2>Dificultad: {e.dificulty}</h2>
                    <h2>Duracion: {e.duration}</h2>
                    <h2>Temporada: {e.season}</h2>
                  </ul>
                </div>
              )}
            </div>
          </div>
          : <p>Cargando...</p>
            }
      <Link href='/home'>
        <button>Volver</button>
      </Link>
    </div>
  )
}
export default Detail
