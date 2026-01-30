import React, { useState, useEffect } from 'react'
import useStore from '../store/zustandStore'
import Link from 'next/link'
import Card from './Card'
import Paginado from './Paginado'
import Navbar from './Navbar'
import Filters from './Filters'

const Home = () => {
  const { getCountries, countries } = useStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [pag, setPag] = useState(1)
  const [countriesPag] = useState(12)
  const [input, setInput] = useState(1)

  useEffect(() => {
    if (countries.length === 0) {
      getCountries()
    }
  }, [countries.length, getCountries])

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const CurrentCountries = filteredCountries.length > 0 ? filteredCountries : countries
  const max = Math.ceil(CurrentCountries.length / countriesPag)

  const handleSearch = (term) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    )
    if (filtered.length === 0) {
      alert('El país no existe')
    }
    setSearchTerm(term)
    setPag(1) // Reinicia la paginación al realizar una nueva búsqueda
  }

  return (
    <div className='mx-auto'>
      <Navbar onSearch={handleSearch} />
      <Filters />
      <Paginado
        pag={pag}
        setPag={setPag}
        max={max}
        input={input}
        setInput={setInput}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 gap-y-6 sm:gap-y-8 md:gap-y-10 justify-center w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto mt-4 px-4 sm:px-0'>
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
