const { Country, Activity } = require('../db')

const postActivity = async (req, res, next) => {
  const { name, dificulty, duration, season, countriesName } = req.body
  try {
    if (name && dificulty && duration && season && countriesName.length > 0) {
      const countries = await Country.find({ name: { $in: countriesName } })
      if (countries.length === 0) {
        return res.status(404).json({ message: 'No se encontraron los países' })
      }
      let activity = await Activity.findOne({ name, dificulty, duration, season })
      if (!activity) {
        activity = await Activity.create({
          name,
          dificulty,
          duration,
          season,
          countries: countries.map(c => c._id)
        })
      } else {
        activity.countries.push(...countries.map(c => c._id))
        await activity.save()
      }
      await Country.updateMany(
        { _id: { $in: countries.map(c => c._id) } },
        { $push: { activities: activity._id } }
      )
      return res.json({ message: 'Actividad creada con éxito', data: activity })
    }
    res.status(400).json({ message: 'Datos insuficientes' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  postActivity
}
