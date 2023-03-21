const { Transform } = require('stream');
const fs = require('fs');
const path = require('path');


function ToUpperCase() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString();
      const modifiedData = data.replace(/\b\w/g, (match) => match.toUpperCase());
      callback(null, modifiedData);
    }
  });
}



const inputFile = path.join(__dirname, 'Rhys.txt');
const outputFile = path.join(__dirname, 'Rowan.txt');

const readStream = fs.createReadStream(inputFile, 'utf8');
const writeStream = fs.createWriteStream(outputFile);

readStream
  .pipe(ToUpperCase())
  .pipe(writeStream)
  .on('finish', () => console.log(`Work done ${String.fromCodePoint(0x1F601)}`));
