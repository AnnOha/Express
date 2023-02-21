const fs = require("fs");
//1. Завдання
function Read(){ 
fs.open("Faab.txt", "r", (err, file) => {
   if (err) throw err;
   fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log(data.toString());
   });
});
}
Read()

//2
function Create(){ 
fs.writeFile("Acortar.txt", `Welcome to Velaris.${String.fromCodePoint(0x1F320)}`, (err) => {
    if (err) throw err;
    console.log("Created!");
 });
}
Create()


//3.
function Add(){
 fs.appendFile("Acortar.txt", " The city of Starlight", (err) => {
   if (err) throw err;
   console.log("Added!");
});
}
Add()

//4
function Delete(){
try {
   if(fs.existsSync('Acortar.txt')){
      fs.unlinkSync('Acortar.txt');
      console.log("Delete File successfully.");
   }else{
      console.log("Does not exist.");
   }
 } catch (error) {
   console.log(error);
 }
}
Delete()
 
//5

const path = require('path');

function moveFile(source, destination) {
  const sourcePath = path.join(__dirname, source);
  const destinationPath = path.join(__dirname, destination);

  fs.rename(sourcePath, destinationPath, (err) => {
    if (err) throw err;
    console.log(`'File was moved successfully!We had luck ${String.fromCodePoint(0x1F643)}'`);
  });
}

moveFile('Books/Tog.txt', 'Abooks/Tog1.txt');
