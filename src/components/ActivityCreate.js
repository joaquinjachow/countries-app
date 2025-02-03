import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import useStore from '../store/zustandStore'
import { useRouter } from 'next/router'

const ActivityCreate = () => {
  const router = useRouter()
  const { getCountries, countries, postActivities } = useStore()
  const [errors, setErrors] = useState({})
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [input, setInput] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    countriesName: []
  })

  useEffect(() => {
    getCountries()
  }, [getCountries])

  const validate = (input) => {
    const errors = {}
    if (!input.name) {
      errors.name = 'Nombre requerido.'
    } else if (input.name.length < 3 || input.name.length > 15) {
      errors.name = 'Nombre inválido (3-15 caracteres).'
    }
    if (input.name.length < 3 || input.name.length > 15) errors.name = 'Nombre inválido (3-15 caracteres).'
    if (input.duration <= 0 || input.duration > 24) errors.duration = 'Duración entre 1 y 24 horas.'
    if (!input.season) errors.season = 'Seleccione una temporada.'
    if (!input.dificulty) errors.dificulty = 'Seleccione una dificultad.'
    if (!input.countriesName.length) errors.countriesName = 'Seleccione al menos un país.'
    setButtonEnabled(Object.keys(errors).length === 0)
    return errors
  }

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setInput((prev) => {
      const newInput = { ...prev, [name]: value }
      setErrors(validate(newInput))
      return newInput
    })
  }, [])

  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value
    if (input.countriesName.includes(selectedCountry)) {
      return alert('Ya seleccionaste este país.')
    }
    const updatedCountriesName = [...input.countriesName, selectedCountry]
    setInput((prev) => ({
      ...prev,
      countriesName: updatedCountriesName
    }))
    setErrors(validate({ ...input, countriesName: updatedCountriesName }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(input)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const activityPayload = {
      name: input.name,
      dificulty: input.dificulty,
      duration: input.duration,
      season: input.season,
      countriesName: input.countriesName
    }

    await postActivities(activityPayload)

    setInput({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      countriesName: []
    })
    alert('Actividad creada con éxito.')
    router.push('/home')
  }

  return (
    <div className='max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg'>
      <Link href='/home'>
        <button className='mb-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800'>
          Volver
        </button>
      </Link>
      <h1 className='text-3xl font-bold mb-6 text-center'>Crea tu Actividad</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
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
            defaultValue='default'
            onChange={handleInputChange}
            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value='default' disabled>Selecciona</option>
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
            defaultValue='default'
            onChange={handleInputChange}
            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value='default' disabled>Selecciona</option>
            <option value='summer'>Verano</option>
            <option value='winter'>Invierno</option>
            <option value='autumn'>Otoño</option>
            <option value='spring'>Primavera</option>
          </select>
          {errors.season && <p className='text-red-500 text-sm'>{errors.season}</p>}
        </div>

        <div>
          <label className='block text-lg font-semibold'>Países:</label>
          <select
            name='countriesName'
            defaultValue='default'
            onChange={handleCountrySelect}
            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value='default' disabled>Selecciona un país</option>
            {countries.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.countriesName && <p className='text-red-500 text-sm'>{errors.countriesName}</p>}
        </div>

        <button
          type='submit'
          disabled={!buttonEnabled}
          className={`w-full py-2 text-white rounded ${buttonEnabled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Crear Actividad
        </button>
      </form>
    </div>
  )
}

export default ActivityCreate
