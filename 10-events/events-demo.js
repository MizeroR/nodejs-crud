const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('userLoggedIn', (user) => {
    console.log(`User ${user} has logged in`);
})

emitter.emit('userLoggedIn', 'Alice')