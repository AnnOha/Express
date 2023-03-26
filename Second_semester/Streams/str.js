const fileSystem = require("fs");
var data = "";

let Fletter = 0;
let letter = false;

const readStream = fileSystem.createReadStream("Acofas.txt");
readStream.setEncoding("UTF8");

readStream.on("data", (chunk) => {
	data += chunk;
	

	const text = chunk.toString();
	for (let i = 0; i < text.length; i++) {
    if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) {
		letter = true;
    } else {
      if(letter === true) {
        Fletter++;
      }

      letter = false;
    }
  }
});

readStream.on('end', () => {
  if(letter === true) {
    Fletter++;
  }

  console.log(`'This file contains ${String.fromCodePoint(0x1F601)}:'`, Fletter, "words")
  console.log('----------------------------------------------------')
})
console.log('----------------------------------------------------')