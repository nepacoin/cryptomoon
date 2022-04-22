const http = require('http')

const server = http.createServer((req, res)=>{
    if ((req.url === '/') || (req.url === '/index')){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('This is about us')
    } 
    if(req.url === '/contact'){
        res.end('This is to contact us')
    } 
    if(req.url === '/partner'){
        res.end('This is our partnership')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you want</p>
        <a href="/">Back home</a>
    `)
})

server.listen(5000)