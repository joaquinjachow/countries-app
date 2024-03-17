import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const Paginado = ({ pag, setPag, max, input, setInput }) => {
  const nextPage = () => {
    if (input + 1 <= max) {
      setInput(input + 1)
      setPag(pag + 1)
    }
  }

  const prevPage = () => {
    if (input - 1 >= 1) {
      setInput(input - 1)
      setPag(pag - 1)
    }
  }

  function handlePagination (e) {
    const value = e.target.value.trim() // Elimina los espacios en blanco al principio y al final
    if (value === '') {
      setInput(1) // Establece la primera página si el input está vacío
      setPag(1)
    } else {
      const parsedValue = parseInt(value)
      if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= max) {
        setInput(parsedValue)
        setPag(parsedValue)
      } else {
        alert(`El número de página debe ser mayor o igual a 1 y menor o igual a ${max}`)
      }
    }
  }

  return (
    <div className='flex h-8 justify-center items-center'>
      {input !== 1 && (
        <button className='p-2 mr-2 cursor-pointer border-none rounded-full bg-[#011935] text-white text-lg h-8 w-8 text-center font-bold flex items-center justify-center' onClick={prevPage}>
          <IoIosArrowBack width={16} height={16} />
        </button>
      )}
      <input className='border border-purple-600 rounded text-center h-8 w-12 ml-2' max={max} min='1' name='pag' autoComplete='off' value={input} onChange={(e) => handlePagination(e)} />
      <button className='numeros border-none rounded h-8 w-12 ml-2'>de {max}</button>
      {input !== max && (
        <button className='p-2 ml-2 cursor-pointer border-none rounded-full bg-[#011935] text-white text-lg h-8 w-8 text-center font-bold flex items-center justify-center' onClick={nextPage}>
          <IoIosArrowForward width={16} height={16} />
        </button>
      )}
    </div>
  )
}
export default Paginado
