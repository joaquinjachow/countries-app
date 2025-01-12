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

  const handlePagination = (e) => {
    const value = e.target.value.trim()
    if (value === '') {
      setInput(1)
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
    <div className='flex items-center justify-center mt-4 space-x-2'>
      {input !== 1 && (
        <button
          className='p-2 rounded-full bg-[#A98069] text-[#FAF3E0] hover:bg-[#8C6A54] transition duration-300'
          onClick={prevPage}
        >
          <IoIosArrowBack size={16} />
        </button>
      )}
      <input
        className='border border-[#A98069] text-center pl-3 rounded-lg h-10 w-12 focus:outline-none focus:ring-2 focus:ring-[#8C6A54]'
        value={input}
        onChange={handlePagination}
        type='number'
        min='1'
        max={max}
      />
      <span className='text-[#5A4634] font-medium'>
        de {max}
      </span>
      {input !== max && (
        <button
          className='p-2 rounded-full bg-[#A98069] text-[#FAF3E0] hover:bg-[#8C6A54] transition duration-300'
          onClick={nextPage}
        >
          <IoIosArrowForward size={16} />
        </button>
      )}
    </div>
  )
}

export default Paginado
