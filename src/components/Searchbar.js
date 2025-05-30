import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('')

  const handleInputChange = (e) => setName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onSearch(name.trim())
    setName('')
  }

  return (
    <div className='flex items-center h-10'>
      <input
        className='border border-[#A98069] rounded-lg px-4 bg-white text-black text-lg h-full w-[40vh] focus:outline-none focus:ring-2 focus:ring-[#8C6A54]'
        value={name}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        type='search'
        placeholder='Buscar País'
        aria-label='Buscar país'
      />
      <button
        className='ml-2 px-4 py-1 rounded-lg bg-white text-[#A98069] font-medium shadow-md hover:bg-[#8C6A54] hover:text-white transition duration-300'
        onClick={handleSubmit}
        aria-label='Buscar'
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
