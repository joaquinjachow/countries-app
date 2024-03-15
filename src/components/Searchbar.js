import React, { useState } from 'react'

const SearchBar = () => {
  const [name, setName] = useState('')

  function handleInputChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }
  function handleSubmit (e) {
    e.preventDefault()
    setName('')
  }

  return (
    <div className='flex items-center h-[4vh]'>
      <input
        className='cursor-auto border-none rounded-3xl bg-white h-full w-[55vh] text-black text-lg text-left pl-4'
        value={name}
        onChange={e => handleInputChange(e)}
        type='search'
        placeholder='Buscar Pais'
      />
      <button className='cursor-pointer border-none bg-none h-full w-20 text-lg m-1 items-center text-[#f0ffff] rounded-lg' type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
    </div>
  )
}
export default SearchBar
