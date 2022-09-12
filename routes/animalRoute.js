import express from 'express'
import {
  getAllAnimals,
  getAnimalById,
  deleteAnimalById,
  deleteAllAnimals,
  updateAnimal,
} from '../controller/animalController.js'

const router = express.Router()

router.get('/get', getAllAnimals)

router.get('/get/:id', getAnimalById)

router.delete('/delete/:id', deleteAnimalById)

router.delete('/delete', deleteAllAnimals)

router.put('/update/:id', updateAnimal)

export default router
