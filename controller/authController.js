import bcrypt from 'bcrypt'
import animalModel from '../models/animalModel.js'
import jwt from 'jsonwebtoken'

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
    const animal = await animalModel.findOne({ email: req.body.email })

    if (!animal) {
      return res.status(404).send('Animal email or password is wrong!')
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      animal.password,
    )

    if (!isPasswordCorrect) {
      return res.status(404).send('Animal email or password is wrong!')
    }

    const token = jwt.sign({ id: animal._id }, process.env.JWT_SECRET, {
      expiresIn: '1 day',
    })

    res.cookie(`session_token`, token, {
      httpOnly: true,
    })

    return res.status(201).send(`Successfully logged in! ${token}`)
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}
