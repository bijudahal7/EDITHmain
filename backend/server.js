require('dotenv').config()
const express = require('express')
const app = express()
const PORT=process.env.PORT
app.get('/', (req, res) => {
  res.send('connection started sucessfully');
})

app.listen(PORT, () => {
  console.log(`port listening on: ${PORT}`)
})