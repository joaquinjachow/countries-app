import React, { useState, useEffect } from 'react'
import useStore from '../store/zustandStore'
import Link from 'next/link'
import Card from './Card'

const Home = () => {
  // const dispatch = useDispatch() // para despachar las actions
  // const allCountries = useSelector((state) => state.Countries)
  /* console.log(allCountries) */
  // variables del paginado
  const { getCountries, filterCountriesByContinent, countries } = useStore()
  useEffect(() => {
    getCountries()
  }, [])
  /*   const handleContinentFilter = (continent) => {
    filterCountriesByContinent(continent)
  } */
  /*   const [CurrentPage, setCurrentPage] = useState(1)
  const [CountriesPerPage, setCountriesperPage] = useState(10)
  const IndexOfLastCountrie = CurrentPage === 1 ? 9 : CurrentPage * CountriesPerPage - 1 // currentpage era siempre 10, entonces lo cambie por 10, lo mismo abajo
  const IndexOfFirstCountrie = CurrentPage === 1 ? 0 : IndexOfLastCountrie - CountriesPerPage */
  // const CurrentCountries = allCountries.slice(IndexOfFirstCountrie, IndexOfLastCountrie)
  /* console.log(CurrentCountrie)
    console.log(CurrentPage)
    console.log(IndexOfFirstCountrie)
    console.log(IndexOfLastCountrie) */

  /*   const paginado = (pageNummber) => {
    setCurrentPage(pageNummber)
  }

  const [order, setOrder] = useState('')
  const [orderP, setOrderPopulation] = useState('') */

  // trae del estado los countries cuando el componente se monta

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
    <div>
      <h1 className='titulo'>Paises</h1>
      <Link href='/activities'>
        <button className='buttons-home'>Crear Actividad</button>
      </Link>
      <div>
        {/*         <SearchBar /> */}
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
        {/*         <Paginado
          CountriesPerPage={CountriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        /> */}
        <div className='grid grid-cols-8 gap-8 justify-center'>
          {countries?.map((el) => {
            return (
              <Link key={el.id} href='/home/[id]' as={`/home/${el.id}`}>
                <div key={el.id} className='flex flex-wrap justify-between mb-[5%]'>
                  <Card
                    name={el.name}
                    flag={el.flag}
                    continent={el.continent}
                    id={el.id}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Home
