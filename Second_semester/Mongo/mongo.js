const request = require('request');
const zlib = require('zlib');
const { MongoClient } = require('mongodb');

// URL файлу з даними про фільми
const url = 'https://popwatch-staging.s3.us-east-2.amazonaws.com/movies_1.gz';

// Функція для розпакування архіву та парсингу JSON
function parseData(data) {
  return data.toString()
    .split('\n')
    .filter(line => line)
    .map(line => JSON.parse(line));
}

// Встановлюємо з'єднання з базою даних
const client = new MongoClient('mongodb+srv://annaoha15:Lonely25@cluster0.okalbgn.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Функція для запису даних в базу даних
async function insertDataToMongoDB(data) {
  try {
    // Підключаємося до бази даних
    await client.connect();
    const database = client.db('movies');
    const collection = database.collection('movies_collection');
  
    // Вставляємо дані в колекцію
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    // Закриваємо з'єднання з базою даних
    await client.close();
  }
}

// Завантажуємо файл та обробляємо його
request({ url, encoding: null }, (err, res, body) => {
  if (err) throw err;

  // Розпаковуємо архів та парсимо JSON
  zlib.gunzip(body, (err, data) => {
    if (err) throw err;
    const parsedData = parseData(data);

    // Записуємо дані в базу даних
    insertDataToMongoDB(parsedData);
  });
});
