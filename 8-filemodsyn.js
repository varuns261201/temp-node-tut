//FILE MODULE -- SYNCHRONOUS or BLOCKING
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)
//reads values from files called first.text and second .txt

writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    )
    //creates a new file called result-sync if its not created 
    //and replaces exisitng content if any with the above text secified


//to append to a file just add the flag
writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    { flag: 'a' }
    )