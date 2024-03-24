import React, { useState, useEffect } from 'react'
import useStore from '../store/zustandStore'
import Link from 'next/link'
import Card from './Card'
import Paginado from './Paginado'
import Navbar from './Navbar'

const Home = () => {
  const { getCountries, countries } = useStore()
  useEffect(() => {
    getCountries()
  }, [])

  // Paginacion
  const [pag, setPag] = useState(1)
  const [countriesPag] = useState(12)
  const [input, setInput] = useState(1)
  const CurrentCountries = countries === 'No se encontro el pais' ? '0' : countries
  const max = Math.ceil(CurrentCountries?.length ? CurrentCountries.length / countriesPag : CurrentCountries.length / countriesPag)
  /*   const [order, setOrder] = useState('')
  const [orderP, setOrderPopulation] = useState('') */

  /*   function handleClick (e) {
    e.preventDefault()
    setOrder('')
    setOrderPopulation('')
    document.getElementById('borrar').getElementsByTagName('option')[0].selected = 'selected'
    document.getElementById('borrar1').getElementsByTagName('option')[0].selected = 'selected'
    document.getElementById('borrar2').getElementsByTagName('option')[0].selected = 'selected'
    document.getElementById('borrar3').getElementsByTagName('option')[0].selected = 'selected'
  }
  function handleSortName (e) {
    e.preventDefault()
    setCurrentPage(1)// seteo para que la pagina default arranque en 1
    setOrder(`Sort ${e.target.value}`) // para que cuando setea la pagina mododifique el estado local y se renderize
  }
  function handleSortPopulation (e) {
    e.preventDefault()
    setCurrentPage(1)
    setOrderPopulation(`Ordenado ${e.target.value}`)
  }
  function handleFilterContinents (e) {
    setCurrentPage(1)
  }
  function handleFilterByActivities (e) {
    setCurrentPage(1)
  }
  function handleFilterPopulation2 (e) {
  } */

  return (
    <div className='mx-auto'>
      <Navbar />
      {/*         <select onChange={e => handleSortName(e)} defaultValue='default' id='borrar'>
          <option value='default' disabled>Ordenado Alfabetico</option>
          <option value='asc'> A-Z</option>
          <option value='des'> Z-A</option>
        </select>
        <select defaultValue='default' onChange={e => handleSortPopulation(e)} id='borrar1'>
          <option value='default' disabled>Ordenado por poblacion</option>
          <option value='des'> Mayor Poblacion</option>
          <option value='asc'> Menor Poblacion</option>
        </select>
        <select onChange={e => handleFilterByActivities(e)} id='borrar2'>
          <option value='all'>Actividades</option>
          <option value='act'>Con Actividades</option>
          <option value='noA'>Sin Actividades</option>
        </select>
        <select onChange={e => handleFilterContinents(e)} id='borrar3'>
          <option value='All'>Continent</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='North America'>North America</option>
          <option value='South America'>South America</option>
          <option value='Oceania'>Oceania</option>
        </select>
        <button onClick={e => { handleFilterPopulation2(e) }}>
          Paises con poblacion mayor a 10.000.000
        </button>
        <button onClick={e => { handleClick(e) }}> Limpiar filtros</button> */}
      <Paginado
        pag={pag}
        setPag={setPag}
        max={max}
        input={input}
        setInput={setInput}
      />
      <div className='grid grid-cols-4 gap-8 justify-center w-[60%] mx-auto mt-4'>
        {CurrentCountries?.slice((pag - 1) * countriesPag, pag * countriesPag).map((country) => {
          return (
            <Link key={country.id} href='/home/[id]' as={`/home/${country.id}`}>
              <div key={country.id}>
                <Card
                  name={country.name}
                  flag={country.flag}
                  continent={country.continent}
                  id={country.id}
                  activities={country.activities}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Home
