//FILE MODULE -- ASYNCHRONOUS or NON BLOCKING
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err)
        return
    }    
    const first = result
    readFile('./content/second.txt','utf8',(err,result) => {
    if(err) {
        console.log(err)
        return
    }    
    const second = result
    writeFile(
        './content/result-async.txt',
        `Here is the result : ${first}, ${second}`,
        (err,result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        }
    )
    })
})


//synchronous happens execution of code line by line 
//only if one task if over it goes to next line

//asynchronous happens execution of code simultaneously
//second task CAN get executed be4 finishing first task