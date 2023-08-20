import app from './app.js'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000
mongoose.set('strictQuery', false)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://zoel:zol2002marzos.@notas-bbdd.kneq625.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, (err) => {
      if (err) {
        console.log(`Server Error on port ${PORT}: `)
        console.log(err)
      } else console.log(`Server on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
