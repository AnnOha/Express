const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const csvParser = require('csv-parser');

const FILENAME = 'shopping_list.csv';

// Створення об'єкта csvWriter
const writer = csvWriter({
  path: FILENAME,
  header: [
    {id: 'id', title: 'ID'},
    {id: 'name', title: 'Name'},
    {id: 'quantity', title: 'Quantity'},
    {id: 'price', title: 'Price'}
  ]
});

// Додавання продукту до списку
function addProduct(name, quantity, price) {
  const id = Date.now().toString(); // унікальний ідентифікатор - час створення запису
  const product = { id, name, quantity, price };
  writer.writeRecords([product])
    .then(() => {
      console.log(`Product ${name} added to the shopping list.`);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Отримання продукту за його ідентифікатором
function getProductById(id) {
  fs.createReadStream(FILENAME)
    .pipe(csvParser())
    .on('data', (row) => {
      if (row.id === id) {
        console.log(row);
      }
    })
    .on('end', () => {
      console.log(`Product with ID ${id} not found.`);
    });
}

// Видалення продукту за його ідентифікатором
function removeProductById(id) {
    const readStream = fs.createReadStream(FILENAME);
    const writeStream = fs.createWriteStream('temp.csv');
    readStream.pipe(csvParser())
    .on('data', (row) => {
    if (row.id !== id) {
    writeStream.write(`${row.id},${row.name},${row.quantity},${row.price}\n`);
    } else {
    console.log(`Product with ID ${id} removed from the shopping list.`);
    } 
})
    .on('end', () => {
    fs.unlink(FILENAME, (err) => {
        if (err) {
    console.error(err);
    } else {
    fs.rename('temp.csv', FILENAME, (err) => {
        if (err) {
    console.error(err); }
 });
    }
 });
    });
 }
    
    // Оновлення продукту за його ідентифікатором
    function updateProductById(id, name, quantity, price) {
        let updated = false;
        const readStream = fs.createReadStream(FILENAME);
        const writeStream = fs.createWriteStream('temp.csv');
        readStream.pipe(csvParser())
        .on('data', (row) => {
            if (row.id === id) {
        row.name = name;
        row.quantity = quantity;
        row.price = price;
        updated = true;
        }
        writeStream.write(`${row.id},${row.name},${row.quantity},${row.price}\n`);
        })
        .on('end', () => {
            if (updated) {
        console.log(`Product with ID ${id} updated.`);
        fs.unlink(FILENAME, (err) => {
            if (err) {
        console.error(err);
        } else {
        fs.rename('temp.csv', FILENAME, (err) => {
            if (err) {
        console.error(err);
        }
    });
        }
    });
        } else {
        console.log(`Product with ID ${id} not found.`);
        fs.unlink('temp.csv', (err) => {
            if (err) {
        console.error(err);
        }
    });
        }
    });
        }
        
    module.exports = {
    addProduct,
    getProductById,
    removeProductById,
    updateProductById
    };
    addProduct("Банан", 2, 15)
    getProductById(1)
    removeProductById(2)
    updateProductById(1, "Нектар", 3, 20)
