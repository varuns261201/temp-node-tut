const names = require('./3.1modules')
console.log(names)
// type node 3.2modules.js to run
//output : { john : 'john',peter : 'peter'}


const sayHi = require('./3.3modules')
sayHi('susan')
sayHi(names.john) //because names.john = 'john'
sayHi(names.peter) //because names.peter = 'peter'