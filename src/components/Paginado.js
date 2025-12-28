import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const Paginado = ({ pag, setPag, max }) => {
  const nextPage = () => {
    if (pag < max) {
      setPag(pag + 1)
    }
  }

  const prevPage = () => {
    if (pag > 1) {
      setPag(pag - 1)
    }
  }

  const renderPages = () => {
    const pages = []
    for (let i = 1; i <= Math.min(5, max); i++) {
      pages.push(i)
    }
    if (max > 5) {
      pages.push('...', max)
    }
    return pages
  }

  const renderPagesDesktop = () => {
    const pages = []
    for (let i = 1; i <= Math.min(10, max); i++) {
      pages.push(i)
    }
    if (max > 10) {
      pages.push('...', max)
    }
    return pages
  }

  return (
    <div className='flex items-center justify-center mt-4 px-4'>
      <div className='flex items-center space-x-1 sm:space-x-2 max-w-full'>
        {pag > 1 && (
          <button
            className='p-2 rounded-full bg-[#A98069] text-[#FAF3E0] hover:bg-[#8C6A54] transition duration-300 flex-shrink-0'
            onClick={prevPage}
            aria-label='Página anterior'
          >
            <IoIosArrowBack size={16} />
          </button>
        )}
        <div className='flex space-x-1 sm:hidden'>
          {renderPages().map((num, index) => (
            <button
              key={index}
              className={`px-2 py-1 rounded-lg text-xs font-medium transition duration-300 flex-shrink-0 ${
                num === pag
                  ? 'bg-[#A98069] text-[#FAF3E0]'
                  : 'bg-transparent text-[#5A4634] hover:bg-[#8C6A54] hover:text-[#FAF3E0]'
              } ${num === '...' ? 'cursor-default' : ''}`}
              onClick={() => typeof num === 'number' && setPag(num)}
              disabled={num === '...'}
            >
              {num}
            </button>
          ))}
        </div>
        <div className='hidden sm:flex space-x-2'>
          {renderPagesDesktop().map((num, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition duration-300 ${
                num === pag
                  ? 'bg-[#A98069] text-[#FAF3E0]'
                  : 'bg-transparent text-[#5A4634] hover:bg-[#8C6A54] hover:text-[#FAF3E0]'
              } ${num === '...' ? 'cursor-default' : ''}`}
              onClick={() => typeof num === 'number' && setPag(num)}
              disabled={num === '...'}
            >
              {num}
            </button>
          ))}
        </div>
        {pag < max && (
          <button
            className='p-2 rounded-full bg-[#A98069] text-[#FAF3E0] hover:bg-[#8C6A54] transition duration-300 flex-shrink-0'
            onClick={nextPage}
            aria-label='Página siguiente'
          >
            <IoIosArrowForward size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Paginado
