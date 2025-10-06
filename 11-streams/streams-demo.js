const fs = require('fs')

const stream = fs.createReadStream('bigfile.txt', {encoding: 'utf8'});

stream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.length);
})

stream.on('end',()=>{
    console.log('Finished reading file');
})