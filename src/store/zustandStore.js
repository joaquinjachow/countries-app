// store/zustandStore.js
import { create } from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
  countries: [],
  allCountries: [],
  detail: [],
  getCountries: async () => {
    try {
      const aux = await axios.get('http://localhost:3001/countries', {})
      set({ countries: aux.data, allCountries: aux.data })
    } catch (error) {
      console.error(error)
    }
  },
  getNameCountries: async (name) => {
    try {
      const aux = await axios.get(`http://localhost:3001/countries?name=${name}`)
      set({ countries: aux.data })
    } catch (error) {
      console.error(error)
    }
  },
  postActivities: async (payload) => {
    try {
      const response = await axios.post('http://localhost:3001/activities', payload)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  },
  getDetail: async (id) => {
    try {
      const aux = await axios.get(`http://localhost:3001/countries/${id}`)
      set({ detail: aux.data })
    } catch (error) {
      console.error(error)
    }
  },
  filterCountriesByContinent: (payload) => {
    const allCountries = useStore.getState().allCountries
    const continentFiltered = payload === 'All' ? allCountries : allCountries.filter(f => f.continent === payload)
    set({ countries: continentFiltered })
  },
  filterActivities: (payload) => {
    const allCountry = useStore.getState().countries
    const activityFilter = payload === 'act' ? allCountry.filter(f => f.activities.length !== 0) : payload === 'noA' ? allCountry.filter(f => !f.activities.length) : allCountry
    set({ countries: activityFilter })
  },
  orderByName: (payload) => {
    const sortedArr = payload === 'asc'
      ? useStore.getState().countries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      : useStore.getState().countries.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))

    set({ countries: sortedArr })
  },
  orderByPopulation: (payload) => {
    const sortPopulationArr = payload === 'asc'
      ? useStore.getState().countries.sort((a, b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0))
      : useStore.getState().countries.sort((a, b) => (a.population > b.population) ? -1 : ((b.population > a.population) ? 1 : 0))

    set({ countries: sortPopulationArr })
  },
  orderByPopulation2: () => {
    const allCountries = useStore.getState().countries
    const MayorPopulation = allCountries.filter(p => p.population > 10000000)
    set({ countries: MayorPopulation })
  }
}))

export default useStore
