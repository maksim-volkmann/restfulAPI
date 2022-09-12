import express from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimalById,
  deleteAllAnimals,
  updateAnimal,
} from '../controller/animalController.js'

const router = express.Router()

//CREATE USER
router.post('/create', createAnimal)

router.get('/get', getAllAnimals)

router.get('/get/:id', getAnimalById)

router.delete('/delete/:id', deleteAnimalById)

router.delete('/delete', deleteAllAnimals)

router.put('/update/:id', updateAnimal)

export default router
