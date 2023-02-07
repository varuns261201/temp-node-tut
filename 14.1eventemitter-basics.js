//event emitter- basics
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//on - listen for an event
//emit - emit an event
//always on comes before emit the event

customEmitter.on('response',(name,id)=>{
    console.log(`data received from user named ${name} having id :${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','john',34)
