import express from 'express'
import level from 'level'

const app = express()
const db = level('./LevelDB')

app.set('port', (process.env.PORT || 3001))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// enable CORS for the server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Get all todos
app.get('/Todos',  (req, res) => {
  res.json({
    todos: [
      {
        id:1,
        desc: 'test'
      }
    ]
  })
})

// Get single todo by Id
app.get('/Todos/:id',  (req, res) => {
  res.json({
    todos: [
      {
        id:1,
        desc: 'test'
      }
    ]
  })
})

app.post('/createTodo', (req, res) => {

})

app.put('/updateTodo/:id', (req, res) => {

})

app.delete('/Todos/:id', (req, res) => {
  
})



app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
