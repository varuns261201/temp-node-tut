//STREAMS WHEN WE ARE READING FILE 

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data',(result) => {
    console.log(result)
})
stream.on('error',(err) => console.log(err))


//**********ADDITIONAL INFO*******/

// const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt',{ highWaterMark: 90000,encoding: 'utf-8',});
// stream.on('data',(result) => {
//     console.log(result)
// })
