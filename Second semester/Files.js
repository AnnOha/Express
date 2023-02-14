const fs = require("fs");

fs.open("Faab.txt", "r", (err, file) => {
   if (err) throw err;
   fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log(data.toString());
   });
});

fs.writeFile("Acortar.txt", "Writing content", (err) => {
    if (err) throw err;
    console.log("Completed!");
 });