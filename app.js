const http = require('http')

const server = http.createServer((request, response)=>{
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    const jsonResponse = {message: `Hello world`}
    response.end(JSON.stringify(jsonResponse))
}
)

const hostname='127.0.0.1'
const port =3500

server.listen(port, hostname, () =>{
    console.log(`server started running at http://${hostname}:${port}/`)
})