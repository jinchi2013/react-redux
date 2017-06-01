import http from 'http'

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!\n')
} ).listen(3001, ()=>{
  console.log('the server is running on http://localhost:3001/')
})
