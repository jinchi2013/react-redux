import http from 'http'

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!\n')
} ).listen(1337, '127.0.0.1', ()=>{
  console.log('the server is running on 127.0.0.1:1337')
})
