const fs = require('fs');

const FILENAME = 'shopping_list.csv';

if (!fs.existsSync(FILENAME)) {
  fs.writeFileSync(FILENAME, ''); // якщо файл не існує, створюємо його
}

// Додавання продукту до списку
function addProduct(name, quantity, price) {
  const id = Date.now().toString(); // унікальний ідентифікатор - час створення запису
  const product = { id, name, quantity, price };
  const line = `${id}; ${name}; ${quantity}; ${price}`;
  fs.appendFileSync(FILENAME, line); // додаємо запис у кінець файлу
  console.log(`Product ${name} added to the shopping list.`);
}

// Отримання продукту за його ідентифікатором
function getProductById(id) {
  const data = fs.readFileSync(FILENAME, 'utf8'); // читаємо вміст файлу
  const lines = data.trim().split(',');
  for (const line of lines) {
    const [productId, name, quantity, price] = line.split(';');
    if (productId === id) {
      return { id: productId, name, quantity, price };
    }
  }
  console.log(`Product with ID ${id} not found.`);
}

// Видалення продукту за його ідентифікатором
function removeProductById(id) {
  let data = fs.readFileSync(FILENAME, 'utf8'); // читаємо вміст файлу
  const lines = data.trim().split('\n');
  const newLines = lines.filter((line) => !line.startsWith(id + ',')); // відфільтровуємо записи, які треба зберегти
  data = newLines.join('\n');
  fs.writeFileSync(FILENAME, data.toString()); // перезаписуємо файл з новим списком продуктів
  console.log(`Product with ID ${id} removed from the shopping list.`);
}

// Зміна продукту за його ідентифікатором
function updateProductById(id, name, quantity, price) {
  let data = fs.readFileSync(FILENAME, 'utf8'); // читаємо вміст файлу
  const lines = data.trim().split('\n');
  let isUpdated = false;
  const newLines = lines.map((line) => {
    const [productId, oldName, oldQuantity, oldPrice] = line.split(',');
    if (Number(productId) === id) { // знаходимо запис за ідентифікатором
      isUpdated = true;
      const newLine = [`${id},${name},${quantity},${price}`];
      console.log(`Product with ID ${id} updated in the shopping list.`);
      return newLine;
    }
    return line;
  });
  if (!isUpdated) {
    console.log(`Product with ID ${id} not found.`);
    return;
  }
  data = newLines.join('\n');
  fs.writeFileSync(FILENAME, data); // перезаписуємо файл з новим списком продуктів
}
addProduct("Яблуко", 3, 15)
getProductById(2)
removeProductById(3)
updateProductById(2, "Нектар", 2,20)