const fs = require('fs');
const csv = require('csv-parser');

// Додавання продуктів у список (CSV файл)
function addProduct(productName, quantity, price) {
  const data = `${productName},${quantity},${price}\n`;
  fs.appendFile('shopping_list.csv', data, (err) => {
    if (err) throw err;
    console.log('Продукт успішно доданий до списку покупок!');
  });
}

// Отримання даних про продукт за його унікальним індексом
function getProduct(productId) {
  let result = null;
  fs.createReadStream('shopping_list.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.id === productId) {
        result = row;
      }
    })
    .on('end', () => {
      console.log(result);
    });
}

// Видалення продукту зі списку (CSV файлу) за його унікальним індексом
function deleteProduct(productId) {
  const rows = [];
  fs.createReadStream('shopping_list.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.id !== productId) {
        rows.push(row);
      }
    })
    .on('end', () => {
      const data = rows.map((row) => {
        return `${row.id},${row.productName},${row.quantity},${row.price}\n`;
      }).join('');
      fs.writeFile('shopping_list.csv', data, (err) => {
        if (err) throw err;
        console.log('Продукт успішно видалений зі списку покупок!');
      });
    });
}

// Зміна продукту за його унікальним індексом
function updateProduct(productId, newProductName, newQuantity, newPrice) {
  const rows = [];
  fs.createReadStream('shopping_list.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.id === productId) {
        row.productName = newProductName;
        row.quantity = newQuantity;
        row.price = newPrice;
      }
      rows.push(row);
    })
    .on('end', () => {
      const data = rows.map((row) => {
        return `${row.id},${row.productName},${row.quantity},${row.price}\n`;
      }).join('');
      fs.writeFile('shopping_list.csv', data, (err) => {
        if (err) throw err;
        console.log('Продукт успішно змінений в списку покупок!');
      });
    });
}

// Приклад використання функцій
addProduct('Молоко', 2, 20);
getProduct(1);
deleteProduct(2);
updateProduct(3, 'Хліб', 1, 15);
