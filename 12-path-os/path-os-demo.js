const path = require('path')
const os = require('os')

console.log('File name:', path.basename(__filename));
console.log('Dir name:', path.dirname(__filename));
console.log('File extension:', path.extname(__filename));

console.log('CPU architecture:', os.arch());
console.log('Free memory:', os.freemem());
console.log('Home directory:', os.homedir());
