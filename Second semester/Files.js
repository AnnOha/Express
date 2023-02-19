const fs = require("fs");
//1. Завдання

fs.open("Faab.txt", "r", (err, file) => {
   if (err) throw err;
   fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log(data.toString());
   });
});
//2
fs.writeFile("Acortar.txt", `Welcome to Velaris.${String.fromCodePoint(0x1F320)}`, (err) => {
    if (err) throw err;
    console.log("Created!");
 });

//3.
 fs.appendFile("Acortar.txt", " The city of Starlight", (err) => {
   if (err) throw err;
   console.log("Added!");
});

//4
try {
   if(fs.existsSync('Acotar.txt')){
      fs.unlinkSync('Acortar.txt');
      console.log("Delete File successfully.");
   }else{
      console.log("Does not exist.");
   }
 } catch (error) {
   console.log(error);
 }