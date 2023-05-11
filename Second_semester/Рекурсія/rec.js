const fs = require('fs');
const path = require('path');

// Завантажуємо дерево мов з файлу
const tree = JSON.parse(fs.readFileSync(path.join(__dirname, 'language-tree.json')));

// Рекурсивна функція для пошуку мови в дереві
function findLanguage(node, targetLanguage) {
  if (node.name && node.name.toLowerCase().includes(targetLanguage.toLowerCase()) || (node.children && node.children.some(child => findLanguage(child, targetLanguage)))) {
    // Якщо мову знайдено, повертаємо масив зі шляхом до мови
    return [node.name];
  } else if (node.children) {
    // Якщо вузол має дочірні вузли, рекурсивно викликаємо функцію findLanguage для кожного дочірнього вузла
    for (const child of node.children) {
      const result = findLanguage(child, targetLanguage);
      if (result) {
        // Якщо мову знайдено в дочірньому вузлі, повертаємо масив зі шляхом до мови, додаючи поточний вузол до масиву
        return [node.name, ...result];
      }
    }
  }
  // Якщо мову не знайдено, повертаємо null
  return null;
}

// Приклад використання функції для пошуку мови "English"
const targetLanguage = "Abun";
const result = findLanguage(tree, targetLanguage);

if (result) {
  console.log(`Мову, що містить "${targetLanguage}", знайдено: ${result.join(' > ')}`);
} else {
  console.log(`Мову, що містить "${targetLanguage}", не знайдено`);
}
