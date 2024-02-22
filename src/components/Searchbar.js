import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { getNameCountries } from '../../Redux/action'

export default function Searchbar () {
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
    <div>
      <input
        className='w-[15%] rounded-lg border border-[#454545d1]'
        value={name}
        onChange={e => handleInputChange(e)}
        type='text'
        placeholder='Buscar Pais'
      />
      <button className='bg-[#454545d1] cursor-pointer text-[#f0ffff]' type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
    </div>
  )
}
