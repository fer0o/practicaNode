const http = require ("http")
const server = http.createServer((req, res)=>{
    res.end("estoy responiendo a tu solicitud v3")
})

const puerto = 3000
server.listen(puerto, () =>{
    console.log("escuchando solicitudes")
})