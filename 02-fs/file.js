const fs = require('fs');

fs.readFile('message.txt', 'utf8', (err,data) => {
    if (err) throw err
    console.log("File contents:", data);

    fs.appendFile('message.txt', '\nNew line added!', (err)=>{
        if (err) throw err
        console.log('Appended to file!');
    });
})