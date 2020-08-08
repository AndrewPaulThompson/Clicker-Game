const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const buyables = require('./src/buyables')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.render('home', {
    items: buyables
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
