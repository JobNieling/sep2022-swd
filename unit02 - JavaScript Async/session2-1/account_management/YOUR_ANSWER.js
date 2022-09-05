fs = require('fs');
const path = require('path')

// Get an array of all files in the folder: 'accounts' using fs.readdir
// Log the contents of the last file in the list to the console using fs.readFile

// files['ashlee_waters', 'hilario_muller', 'serena_klein'];

fs.readdir('accounts', (err, fileList) => {
    console.log(fileList);
    console.log(fileList.length);
});



fs.readFile(path.join('accounts', 'serena_klein'), (err, fileContents) => {
    console.log(fileContents.toString());
});