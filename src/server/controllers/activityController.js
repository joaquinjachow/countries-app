const { Country, Activity } = require('../db')

const postActivity = async (req, res, next) => {
  const { name, dificulty, duration, season, countriesName } = req.body
  try {
    if (name && dificulty && duration && season && countriesName) {
      const activity = {
        name,
        dificulty,
        season,
        duration
      }
      const createdActivity = await Activity.create(activity)
      const infoCountriesName = await Country.find({
        name: {
          $in: countriesName
        }
      })

      infoCountriesName.forEach((country) => {
        country.activities.push(createdActivity._id)
        country.save()
      })
      if (createdActivity) { res.json({ message: 'Se creo correctamente la Actividad', data: createdActivity }) } else res.json({ message: 'Error, no se obtuvieron suficientes datos' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  postActivity
}
