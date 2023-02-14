const fs = require("fs");

fs.open("sample.txt", "w", (err, file) => {
   if (err) throw err;
   console.log(file);
});