const express = require('express');
const app = express();
const host = 'localhost';
const Pool = require('pg').Pool
const port = 8000;

app.use(express.json());

//Завдання 0

const pool = new Pool({
  user: 'ukd_admin',
  host: 'ep-square-mouse-262994.us-west-2.aws.neon.tech',
  database: 'ukd',
  password: 'YyfeQqL0W8uS',
  port: 5432,
  ssl: true
})

app.get('/', (req, res) => {
  pool.query('SELECT * FROM "tasks"', (error, results) => {
    res.status(200).json(results.rows)
  })
});

//  Завдання 1
app.post('/students', (req, res) => {
  const { first_name, last_name, age, email } = req.body;

  pool.query(
    'INSERT INTO students (first_name, last_name, age, email) VALUES ($1, $2, $3, $4)',
    [first_name, last_name, age, email],
    (error, results) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(201).send('Student added successfully');
      }
    }
  );
});

// Завдання 2
app.post('/tasks', (req, res) => {
  const { student_id, description, note, subject_id } = req.body;

  pool.query(
    'INSERT INTO tasks (student_id, description, note, subject_id) VALUES ($1, $2, $3, $4)',
    [student_id, description, note, subject_id],
    (error, results) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(201).send('Task added successfully');
      }
    }
  );
});

// Завдання 3
app.get('/join', (req, res) => {
  pool.query(
    `SELECT students.id, students.first_name, students.last_name, students.age, students.email, tasks.id AS task_id, tasks.description as task_description, tasks.note as task_note, subjects.name as subject_name
    FROM students
    LEFT JOIN tasks ON students.id = tasks.student_id
    LEFT JOIN subjects ON tasks.subject_id = subjects.id
    ORDER BY students.id`,
    (error, results) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        const students = [];

        results.rows.forEach((row) => {
          const student = students.find((s) => s.id === row.id);

          if (!student) {
            students.push({
              id: row.id,
              first_name: row.first_name,
              last_name: row.last_name,
              age: row.age,
              email: row.email,
              tasks: [],
            });
          }

          if (row.task_id) {
            students[students.length - 1].tasks.push({
              id: row.task_id,
              description: row.task_description,
              note: row.task_note,
              subject_name: row.subject_name,
            });
          }
        });

        res.send(students);
      }
    }
  );
});


app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`); 
});