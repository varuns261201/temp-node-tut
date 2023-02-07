const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        //blocking code 
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i}`)
            }
        }
         res.end('About Page')
    }
    else{
    res.end('Error page')
    }
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})

//the blocking code takes a long time to execute
//thereby taking a lot of time for the about page to reload