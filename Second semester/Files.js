const fs = require("fs");

fs.open("Faab.txt", "r", (err, file) => {
   if (err) throw err;
   fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log(data.toString());
   });
});

fs.writeFile("Acortar.txt", `Welcome to Velaris.${String.fromCodePoint(0x1F320)}`, (err) => {
    if (err) throw err;
    console.log("Created!");
 });


 fs.appendFile("Acortar.txt", " The city of Starlight", (err) => {
   if (err) throw err;
   console.log("Added!");
});