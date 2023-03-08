const crypto = require('crypto');
const fs = require('fs');

function HashedPass(password) {
  const salt = crypto.randomBytes(16).toString('hex'); 
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha512').toString('hex'); 
  return { salt, hash };
}

function hashAndSave(password, filePath) {
  const { salt, hash } = HashedPass(password); 
  const data = JSON.stringify({ salt, hash }); 
  fs.writeFileSync(filePath, data); 
  console.log('Пароль успішно збережено у файлі ' + filePath);
}

function comparePassword(password, filePath) {
  const data = fs.readFileSync(filePath); 
  const { salt, hash } = JSON.parse(data); 
  const inputHash = crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha512').toString('hex');
  const result = inputHash === hash;
  console.log(result ? 'Паролі співпадають' : 'Паролі не співпадають');
  return result;
}



// Отримання параметрів з командного рядка
const args = process.argv.slice(2); 
const command = args[0]; 

if (command === 'hash') {
  const password = args[1]; 
  const filePath = args[2]; 
  try {
    hashAndSave(password, filePath); 
  } catch (error) {
  console.error('Сталася помилка: ', error);
  } 
  }else if (command === 'compare') {
  const password = args[1];
  const filePath = args[2]; 
  try {
  comparePassword(password, filePath); 
  } catch (error) {
  console.error('Сталася помилка: ', error);
  }
  } else {
  console.log('Невідома команда');
  }

 hashAndSave('123', "./password.txt")
 comparePassword('123', "./password.txt")













/*

 const fs = require('fs');
const crypto = require('crypto');

// Функція для хешування паролю та збереження в файл
function hashAndSave(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  fs.writeFile('password.txt', hash, (err) => {
    if (err) throw err;
    console.log('Password saved successfully!');
  });
}

// Функція для порівняння рядка паролю зі значенням, збереженим у файлі
function comparePassword(password) {
  fs.readFile('password.txt', (err, data) => {
    if (err) throw err;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (hash === data.toString()) {
      console.log('Password matched successfully!');
    } else {
      console.log('Incorrect password!');
    }
  });
}

// Отримання параметрів з командного рядка
const [,, action, password] = process.argv;

// Виклик відповідної функції залежно від переданого параметру
if (action === 'hash') {
  hashAndSave(password);
} else if (action === 'compare') {
  comparePassword(password);
} else {
  console.log('Invalid action!');
}*/