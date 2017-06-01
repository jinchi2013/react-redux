import express from 'express'

const app = express()

app.set('port', (process.env.PORT || 3001))

// enable CORS for the server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/api/json',  (req, res) => {
  res.json({
    todos: [
      {
        id:1,
        desc: 'test'
      }
    ]
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
