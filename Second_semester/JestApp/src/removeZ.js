function removeZ(arr) {
    let combinedStr = arr.join(""); // Об'єднуємо всі строки в одну
    return combinedStr.replace(/z/g,"").replace(/Z/g,""); // Видаляємо всі символи "z"
  }
  
    module.exports = removeZ 