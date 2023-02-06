const http = require('http')

const server = http.createServer((req, res) => {
    //req is the reqesnt and res is the response
    //console.log(req) prints a giant function on the terminal
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    else if (req.url === '/about') { 
        res.end('here is the about page')
    }
    // if they access a page that doesnt exist
    else {
      res.end(`
    <h1>Oops</h1>
    <p> We cant seem to find the page u are looking for </p>
    <a href="/">back home</a>
    `
    //redirecting the page to home page by adding href
    )
    }
})


//port our server will be listening to
server.listen(5000)

//run on chrome localhost:5000