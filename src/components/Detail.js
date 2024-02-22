import React from 'react' //, { useEffect }
import Link from 'next/link'
import Image from 'next/image'
// import { useDispatch, useSelector } from 'react-redux'
// import { getDetail } from '../../Redux/action'

import './Detail.css'

export default function Detail (props) {
/*   useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, [dispatch]) */
  const myCountry = useSelector((state) => state.detail)

  return (
    <div>
      {
                myCountry.length > 0
                  ? <div className='grid columns-3 pt-36 justify-center items-center'>
                    <div>
                      <Image className='w-full pl-10' src={myCountry[0].flag} alt='Bandera del Pais' />
                    </div>
                    <div className='w-96 h-96 text-lg bg-[#cfa48f81] rounded-sm border border-black'>
                      <h1>Nombre: {myCountry[0].name}</h1>
                      <h2>Id: {myCountry[0].id}</h2>
                      <h2>Capital: {myCountry[0].capital}</h2>
                      <h2>Continente: {myCountry[0].subregion}</h2>
                      <h2>Area: {myCountry[0].area} km²</h2>
                      <h2>Poblacion: {myCountry[0].population}</h2>
                    </div>
                    <div className='w-96 h-[400px] text-lg border-rounded border border-black bg-[#cfa48f81]'>
                      {myCountry[0].activities.length ? <h1><b>Activities:</b></h1> : ''}
                      {myCountry[0].activities?.map(e => <div>
                        <ul className='flex h-24 flex-col pl-0'>
                          <h2>Nombre: {e.name}</h2>
                          <h2>Dificultad: {e.dificulty}</h2>
                          <h2>Duracion: {e.duration}</h2>
                          <h2>Temporada: {e.season}</h2>
                        </ul>
                      </div>)}
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
