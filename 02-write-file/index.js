const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname,"text.txt"));

process.stdout.write("Enter text please\n");
process.stdin.on('data', data => {    
    if(data.toString().trim() == 'exit'){
        process.exit();
    }
    else{
        output.write(data);       
    }
        
});

process.on('exit', () => process.stdout.write("Good bye"));
process.on('SIGINT', () => process.exit());
