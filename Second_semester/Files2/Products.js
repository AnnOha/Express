const fs = require('fs');

const FILE_NAME = 'shopping_list.csv';

// Функція для додавання продукту у список
function addProduct(product) {
  fs.appendFileSync(FILE_NAME, `${product.id},${product.name},${product.price}\n`);
  console.log('Product has been added to your shopping list');
}

// Функція для отриманно продукт за його унікальним ідентифікатором
function getProductById(id) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  for (const product of products) {
    const [productId, name, price] = product.split(',');
    if (productId === id) {
      return { id: productId, name, price };
    } 
  }
  return null;
}

// Функція для видалення продукту зі списку за його унікальним ідентифікатором
function deleteProductById(id) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  let updatedProducts = '';
  for (const product of products) {
    const [productId] = product.split(',');
    if (productId !== id) {
      updatedProducts += `${product}\n`;
    }
  }
  fs.writeFileSync(FILE_NAME, updatedProducts);
  console.log("Product deleted")
}

// Функція для зміни продукту за його унікальним ідентифікатором
function updateProductById(id, updatedProduct) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  let updatedProducts = '';
  for (const product of products) {
    const [productId] = product.split(',');
    if (productId === id) {
      updatedProducts += `${updatedProduct.id},${updatedProduct.name},${updatedProduct.price}\n`;
    } else {
      updatedProducts += `${product}\n`;
    }
  }
  fs.writeFileSync(FILE_NAME, updatedProducts);
 // console.log("Product updated")
}

// Приклад використання функцій
addProduct({id:"Id:1", name:"Product: honeydew", price:"Price: 155"})
updateProductById("Id:1", {id:"Id:1", name:"Product:Rhys", price: "Price: 500"})
addProduct({id:"Id:2", name:"Product: Cas", price:"Price: 100B"})
addProduct({id:"Id:3", name:"Product: Soup", price:"Price: 255"})
deleteProductById("Id:3")
console.log(getProductById("Id:2"))



