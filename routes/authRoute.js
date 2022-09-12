import express from 'express'
import { createAnimal, loginAnimal } from '../controller/authController.js'

const router = express.Router()

// User Creation
router.post('/register', createAnimal)

// User login
router.post('/login', loginAnimal)

export default router
