// streams - http example

var http = require('http')
var fs = require('fs')

http 
    .createServer(function (req,res) {
        // const text = fs.readFileSync('./content/big.txt','utf8')
        // res.end(text)
        //connection: keep-alive
        //content-length: 1788990
        const fileStream = fs.createReadStream('./content/big.txt','utf8');
        fileStream.on('open',()=>{
        fileStream.pipe(res)//pipe method pushes read stream into write stream..if we can read data in chunk then we can write data as well in chunk
        //Connection: keep-alive
        //transfer-encoding : chunked
        //inspect->network->refresh->localhost->headers->transfer encoding
        })
        fileStream.on('error',(err)=>{
            res.end(err)
        })
    })
    .listen(5000)
