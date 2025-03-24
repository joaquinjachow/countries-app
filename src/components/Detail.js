import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useStore from '../store/zustandStore'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  const { getCountries, countries, addActivityToCountry } = useStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: ''
  })

  useEffect(() => {
    if (countries.length === 0) {
      getCountries()
    }
  }, [countries.length, getCountries])

  const selectedCountry = countries.find((country) => country.id === id)

  if (!selectedCountry) {
    return <p className='text-3xl font-bold text-center'>Cargando...</p>
  }

  const validate = (input) => {
    const errors = {}
    if (!input.name) errors.name = 'Nombre requerido.'
    if (input.name.length < 3 || input.name.length > 15) errors.name = 'Nombre inválido (3-15 caracteres).'
    if (input.duration <= 0 || input.duration > 24) errors.duration = 'Duración entre 1 y 24 horas.'
    if (!input.season) errors.season = 'Seleccione una temporada.'
    if (!input.dificulty) errors.dificulty = 'Seleccione una dificultad.'
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput((prevInput) => {
      const updatedInput = { ...prevInput, [name]: value }
      setErrors(validate(updatedInput))
      return updatedInput
    })
  }

  const handleSaveActivity = async () => {
    const validationErrors = validate(input)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    if (!selectedCountry) {
      toast.error('No se encontró el país.')
      return
    }
    await addActivityToCountry(selectedCountry.id, input)
    setInput({ name: '', dificulty: '', duration: '', season: '' })
    setIsModalOpen(false)
    toast.success('Actividad agregada con éxito!')
  }

  return (
    <div className='container mx-auto pt-20'>
      <div className='flex flex-col items-center'>
        <div className='bg-white p-16 rounded-lg shadow-lg shadow-slate-500 border border-gray-300 flex flex-col md:flex-row items-center max-w-4xl'>
          <div className='flex-shrink-0 mb-6 md:mb-0 md:mr-8'>
            <Image
              width={300}
              height={200}
              className='object-cover rounded-lg'
              src={selectedCountry.flag}
              alt={`Bandera de ${selectedCountry.name}`}
            />
          </div>
          <div className='text-lg flex-grow'>
            <h1 className='text-4xl font-bold mb-4 text-center md:text-left'>{selectedCountry.name}</h1>
            <div className='space-y-2'>
              <p>
                <strong>ID:</strong> {selectedCountry.id}
              </p>
              <p>
                <strong>Capital:</strong> {selectedCountry.capital}
              </p>
              <p>
                <strong>Continente:</strong> {selectedCountry.subregion}
              </p>
              <p>
                <strong>Área:</strong> {selectedCountry.area} km²
              </p>
              <p>
                <strong>Población:</strong> {selectedCountry.population}
              </p>
            </div>
          </div>
        </div>

        {selectedCountry.activities.length > 0 && (
          <div className='mt-8 bg-[#8fa4cf81] p-6 rounded-lg shadow-md border border-black max-w-4xl w-full'>
            <h2 className='text-2xl font-bold mb-4'>Actividades:</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {selectedCountry.activities.map((e) => (
                <div key={e.id} className='text-lg'>
                  <p>
                    <strong>Nombre:</strong> {e.name}
                  </p>
                  <p>
                    <strong>Dificultad:</strong> {e.dificulty}
                  </p>
                  <p>
                    <strong>Duración:</strong> {e.duration}
                  </p>
                  <p>
                    <strong>Temporada:</strong> {e.season}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='flex justify-center mt-8'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'
        >
          Agregar Actividad
        </button>
      </div>

      <Link href='/home'>
        <button className='mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300'>
          Volver
        </button>
      </Link>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300'>
          <div className='bg-white p-8 rounded-lg shadow-xl max-w-lg w-full transform transition-all scale-95'>
            <h2 className='text-2xl font-bold mb-4'>Crear Actividad</h2>
            <div className='space-y-4'>
              <div>
                <label className='block text-lg font-semibold'>Nombre:</label>
                <input
                  type='text'
                  name='name'
                  value={input.name}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              </div>
              <div>
                <label className='block text-lg font-semibold'>Dificultad:</label>
                <select
                  name='dificulty'
                  value={input.dificulty}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Selecciona</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                {errors.dificulty && <p className='text-red-500 text-sm'>{errors.dificulty}</p>}
              </div>
              <div>
                <label className='block text-lg font-semibold'>Duración (horas):</label>
                <input
                  type='number'
                  name='duration'
                  value={input.duration}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.duration && <p className='text-red-500 text-sm'>{errors.duration}</p>}
              </div>
              <div>
                <label className='block text-lg font-semibold'>Temporada:</label>
                <select
                  name='season'
                  value={input.season}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Selecciona</option>
                  <option value='summer'>Verano</option>
                  <option value='winter'>Invierno</option>
                  <option value='autumn'>Otoño</option>
                  <option value='spring'>Primavera</option>
                </select>
                {errors.season && <p className='text-red-500 text-sm'>{errors.season}</p>}
              </div>
              <div className='flex justify-end space-x-4'>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveActivity}
                  className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
