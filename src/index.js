import app from './app.js'
const PORT = 3000

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Server Error on port ${PORT}: `)
    console.log(err)
  } else console.log(`Server on port ${PORT}`)
})
