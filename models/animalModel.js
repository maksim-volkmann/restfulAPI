import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema(
  {
    species: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    weight: {
      type: Number,
    },
    aggressive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('animal', animalSchema)
