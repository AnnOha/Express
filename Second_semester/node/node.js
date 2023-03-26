const https = require('https');
const fs = require('fs');


const file = 'https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';

// Завантаження файлу та збереження локально
https.get(file, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('file.txt', data);
    console.log('----------------------------------------------------')
    console.log(`'File was downloaded and saved local ${String.fromCodePoint(0x1F60E)}'`);
    console.log('----------------------------------------------------')

    // Кількость рядків у файлі
    const fileContent = fs.readFileSync('file.txt', 'utf-8');
    const lines = fileContent.split('\n');
    console.log(`Line count: ${lines.length}`);

    const reverseContent = fileContent.split('').reverse().join('');
    fs.writeFileSync('reverse.txt', reverseContent);
    console.log('----------------------------------------------------')
    console.log(`'Reverse symbols done ${String.fromCodePoint(0x2705)}'`);
    console.log('----------------------------------------------------')
  });

}).on('error', (err) => {
  console.log('ERROR: ' + err.message);
});


