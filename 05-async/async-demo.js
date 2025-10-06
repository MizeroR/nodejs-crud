const fs = require('fs').promises;

fs.readFile('02-fs/message.txt', 'utf8')
    .then(data => console.log('Promise: ', data))
    .catch(err => console.log(err));

async function readFileAsync() {
    try {
        const data = await fs.readFile('message.txt', 'utf8')
        console.log('Async/Await: ', data);
    } catch (err) {
        console.error(err)
    }
}
readFileAsync();