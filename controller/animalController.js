import animalModel from '../models/animalModel.js'

//GET ALL Animals
export const getAllAnimals = async (req, res) => {
  try {
    const allAnimals = await animalModel.find({}, { password: 0 })
    res.status(202).json(allAnimals)
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}

//GET Animal BY ID
export const getAnimalById = async (req, res) => {
  try {
    const animal = await animalModel.findById(req.params.id)
    const { password, ...remainingAnimalData } = animal._doc
    res.status(200).json(remainingAnimalData)
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}

//DELETE Animal BY ID
export const deleteAnimalById = async (req, res) => {
  try {
    await animalModel.findByIdAndDelete(req.params.id)
    res.status(200).json(`The animal is deleted!`)
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}

//DELETE ALL Animals
export const deleteAllAnimals = async (req, res) => {
  try {
    await animalModel.deleteMany()
    res.status(200).json(`All animals where deleted`)
  } catch (error) {
    res.status(405).send(error)
    console.error(error)
  }
}

//UPDATE USER BY ID
export const updateAnimal = async (req, res) => {
  try {
    const updatedAnimal = await animalModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    )
    res.status(200).json(updatedAnimal)
  } catch (error) {
    // res.status(405).send(error)
    console.error(error)
  }
}
