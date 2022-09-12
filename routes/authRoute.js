import express from 'express'
import { createAnimal } from '../controller/authController.js'

const router = express.Router()

router.post('/register', createAnimal)

export default router
