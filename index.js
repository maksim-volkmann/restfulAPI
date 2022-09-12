import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import animalRoute from './routes/animalRoute.js'

const app = express()
const port = 3001

dotenv.config()

app.use(express.json())

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connection to mongoDB is successfull!')
  } catch (error) {
    console.error(error)
  }
}

app.use('/api', animalRoute)

app.listen(port, () => {
  connectionToDB()
  console.log(`Server started on port ${port}`)
})
