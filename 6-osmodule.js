//OS MODULE
//const os = require('os')
//os.something 
//or
//const {something} = require('os')

const os = require('os')
//info about the current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)
 
//other os functions
const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS)