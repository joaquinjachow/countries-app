import React, { useState } from 'react'
import useStore from '../store/zustandStore'

const Filters = () => {
  const { getCountries, filterCountriesByContinent, filterActivities, orderByName, orderByPopulation } = useStore()
  const [continent, setContinent] = useState('All')
  const [activity, setActivity] = useState('all')
  const [order, setOrder] = useState('')

  const handleContinentChange = (e) => {
    setContinent(e.target.value)
    filterCountriesByContinent(e.target.value)
  }

  const handleActivityChange = (e) => {
    setActivity(e.target.value)
    filterActivities(e.target.value)
  }

  const handleOrderChange = (e) => {
    setOrder(e.target.value)
    if (e.target.value === 'name-asc' || e.target.value === 'name-desc') {
      orderByName(e.target.value === 'name-asc' ? 'asc' : 'desc')
    } else if (e.target.value === 'pop-asc' || e.target.value === 'pop-desc') {
      orderByPopulation(e.target.value === 'pop-asc' ? 'asc' : 'desc')
    }
  }

  const resetFilters = () => {
    setContinent('All')
    setActivity('all')
    setOrder('')
    getCountries()
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 p-3 rounded-lg items-center justify-center'>
      <select
        value={continent}
        onChange={handleContinentChange}
        className='p-2 rounded-md border-[#A98069] border focus:ring-2 focus:ring-[#8C6A54] transition'
      >
        <option value='All'>🌍 Todos los continentes</option>
        <option value='Asia'>🌏 Asia</option>
        <option value='Europe'>🌍 Europa</option>
        <option value='Africa'>🌍 África</option>
        <option value='Americas'>🌎 América</option>
        <option value='Oceania'>🌊 Oceanía</option>
      </select>

      <select
        value={activity}
        onChange={handleActivityChange}
        className='p-2 rounded-md border-[#A98069] border focus:ring-2 focus:ring-[#8C6A54] transition'
      >
        <option value='all'>🎭 Todas las actividades</option>
        <option value='act'>✅ Con actividades</option>
        <option value='noA'>❌ Sin actividades</option>
      </select>

      <select
        value={order}
        onChange={handleOrderChange}
        className='p-2 border-[#A98069] border rounded-md focus:ring-2 focus:ring-[#8C6A54] transition'
      >
        <option value=''>🔀 Ordenar por</option>
        <option value='name-asc'>🔤 Nombre (A-Z)</option>
        <option value='name-desc'>🔠 Nombre (Z-A)</option>
        <option value='pop-asc'>📈 Población (Ascendente)</option>
        <option value='pop-desc'>📉 Población (Descendente)</option>
      </select>

      <button
        onClick={resetFilters}
        className='bg-[#A98069] hover:bg-[#8C6A54] text-white font-semibold px-4 py-2 rounded-md transition-all shadow-md'
      >
        🔄 Resetear Filtros
      </button>
    </div>
  )
}

export default Filters
