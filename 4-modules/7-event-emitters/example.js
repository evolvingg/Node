const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout


const myEmitter  = new EventEmitter();

setImmediate(() => {
    myEmitter.emit('test_event');
});


myEmitter.on('test_event',() => {
    console.log('event ws fired');
});

myEmitter.on('test_event',() => {
    console.log('event ws fired');
});


myEmitter.on('test_event',() => {
    console.log('event ws fired');
});