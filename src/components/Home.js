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

  /*   function handleSortName (e) {
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
