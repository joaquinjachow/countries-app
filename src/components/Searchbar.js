import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('')

  const handleInputChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(name.trim())
    setName('')
  }

  return (
    <div className='flex items-center h-[4vh]'>
      <input
        className='cursor-auto border-none rounded-3xl px-4 bg-white h-full w-[55vh] text-black text-lg text-left pl-4'
        value={name}
        onChange={e => handleInputChange(e)}
        type='search'
        placeholder='Buscar Pais'
      />
      <button
        className='cursor-pointer border-none bg-none h-full w-20 text-lg m-1 items-center text-[#f0ffff] rounded-lg'
        type='submit'
        onClick={handleSubmit}
      >
        Buscar
      </button>
    </div>
  )
}
export default SearchBar
