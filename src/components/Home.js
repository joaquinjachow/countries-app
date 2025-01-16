import React, { useState, useEffect } from 'react'
import useStore from '../store/zustandStore'
import Link from 'next/link'
import Card from './Card'
import Paginado from './Paginado'
import Navbar from './Navbar'

const Home = () => {
  const { getCountries, countries } = useStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [pag, setPag] = useState(1)
  const [countriesPag] = useState(12)
  const [input, setInput] = useState(1)

  useEffect(() => {
    getCountries()
  }, [])

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
