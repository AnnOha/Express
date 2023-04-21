/*
require("pidcrypt/seedrandom");
var pidCrypt = require("pidcrypt");

require("pidcrypt/aes_cbc");
var aes = new pidCrypt.AES.CBC();

const fs = require("fs");



function encryptFile(filePath) {
  fs.readFile("hades.txt", "utf8", (err, data) => {
    if (err) return console.error(err);

    const EnText = aes.encryptText(data);
    const FilePath = filePath.replace(/\.txt$/, ".enc");

    fs.writeFile(FilePath, EnText, (err) => {
      if (err) return console.error(err);
      console.log(`text in "${"hades.txt"}" was encrypted and saved ${String.fromCodePoint(0x1F60F)}"${FilePath}".`);

      fs.unlink("hades.txt", (err) => {
        if (err) return console.error(err);
        console.log(`File "${"hades.txt"}" was deleted.`);
      });
    });
  });
}
encryptFile("hades.txt")
*/
require("pidcrypt/seedrandom");
var pidCrypt = require("pidcrypt");

require("pidcrypt/aes_cbc");
var aes = new pidCrypt.AES.CBC();

const fs = require("fs");

const decryptFile = (filePath) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return console.error(err);

        const decryptedText = aes.decryptText(data);

        const newFilePath = filePath.replace(/\.enc$/, ".txt");

        fs.writeFile(newFilePath, decryptedText, (err) => {
            if (err) return console.error(err);

            console.log(`Text in file"${filePath}" decrypted and saved "${String.fromCodePoint(0x1F60F)}""${newFilePath}".`);

            fs.unlink(filePath, (err) => {
                if (err) return console.error(err);
                
                console.log(`File"${filePath}" was deleted "${String.fromCodePoint(0x1F60F)}"`);
            });
        });
    });
};

decryptFile("hades.enc");