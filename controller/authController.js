import bcrypt from 'bcrypt'
import animalModel from '../models/animalModel.js'

//CREATE Animal
export const createAnimal = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newAnimal = new animalModel({
      ...req.body,
      password: hash,
    })
    await newAnimal.save()
    res.status(201).send('New animal is created')
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}

export const loginAnimal = async (req, res) => {
  try {
    res.status(201).send('Successfully logged in!')
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}
