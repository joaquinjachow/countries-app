import React from 'react'

const Paginado = ({ CountriesPerPage, allCountries, paginado, CurrentPage }) => {
  const pageNummbers = []

  for (let i = 1; i <= Math.ceil(allCountries / CountriesPerPage); i++) {
    pageNummbers.push(i)
  }

  return (
    <nav>
      <ul className='flex gap-x-1 justify-center mb-10'>
        {pageNummbers && pageNummbers.map(number => (
          <li className='flex px-2 py-1 w-10 h-10 text-lg rounded cursor-pointer bg-[#454545d1] text-[#f0ffff]' key={number}>
            <button className='mx-auto' onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Paginado
