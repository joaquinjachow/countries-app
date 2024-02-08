const axios = require('axios')
const { Country, Activity } = require('../db')

const getCountries = async (req, res) => {
  const { name } = req.query

  if (!name) {
    try {
      const countriesWithActivities = await Country.find({})
        .populate('activities', 'name dificulty duration season')

      if (countriesWithActivities.length > 0) {
        return res.status(200).send(countriesWithActivities)
      } else {
        const allCountries = await axios.get('https://restcountries.com/v3/all')
        const countriesData = allCountries.data.map((country) => ({
          id: country.cca3,
          name: country.name.common,
          flag: country.flags[0],
          continent: country.continents[0],
          capital: country.capital != null ? country.capital[0] : 'No data',
          subregion: country.subregion,
          area: country.area,
          population: country.population
        }))

        const createdCountries = await Country.insertMany(countriesData)
        const activities = await Activity.find({})
        for (const createdCountry of createdCountries) {
          createdCountry.activities = activities.map(activity => activity._id)
          await createdCountry.save()
        }
        const countriesWithActivitiesAfterCreate = await Country.find({})
          .populate('activities', 'name dificulty duration season')
        return res.status(200).send(countriesWithActivitiesAfterCreate)
      }
    } catch (error) {
      console.error(error)
      return res.status(500).send('Error en el servidor')
    }
  }

  try {
    const countriesWithName = await Country.find({
      name: { $regex: new RegExp(name, 'i') }
    }).populate('activities', 'name dificulty duration season')

    return countriesWithName.length
      ? res.status(200).send(countriesWithName)
      : res.status(404).send('No existe ese País')
  } catch (error) {
    console.error(error)
    return res.status(500).send('Error en el servidor')
  }
}

const getCountryById = async (req, res) => {
  const { id } = req.params
  try {
    const countryById = await Country.findOne({ id })
      .populate('activities', 'name dificulty duration season')
    return countryById
      ? res.status(200).send(countryById)
      : res.status(404).send('No se recibió un ID correcto')
  } catch (error) {
    console.error(error)
    return res.status(500).send('Error en el servidor')
  }
}

module.exports = {
  getCountries,
  getCountryById
}
