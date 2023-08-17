import express from 'express'
import notesRoutes from './routes/notes.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// middleware
app.use((req, res, next) => {
  console.log(req.body)
  console.log(req.path)
  console.log(req.method)
  console.log('---------')
  next()
})

// routes
app.use('/api', notesRoutes)

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  })
})

export default app
