const fs = require('fs'); //importing 'fs' module

const dataBuffer = fs.readFileSync('1-json.json'); //read original JSON file
const jsonData = JSON.parse(dataBuffer); //converting Binary object into a JSON data

//Changing JSON Data
jsonData.name = "OM";
jsonData.age = 17;

// Covert JSON data into String.
const alteredJSON = JSON.stringify(jsonData);

//Overwrite the original 1-json.json file.
fs.writeFileSync('1-json.json', alteredJSON);