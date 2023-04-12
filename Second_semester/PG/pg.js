const express = require('express');
const app = express();
const host = 'localhost'; 
const port = 8000; 

const { Pool } = require('pg');

const pool = new Pool({
  user: 'ukd_admin',
  host: 'ep-square-mouse-262994.us-west-2.aws.neon.tech',
  database: 'ukd',
  password: 'YyfeQqL0W8uS',
  port: 5432,
  ssl: true
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});



app.post('/students', (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO students (name, email) VALUES ($1, $2)', [name, email], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting student into database');
      } else {
        res.status(201).send(`Student added with ID: ${result.insertId}`);
      }
    });
  });

  



  app.post('/tasks', (req, res) => {
    const { studentId, subject, task } = req.body;
    pool.query('INSERT INTO tasks (student_id, subject, task) VALUES ($1, $2, $3)', [studentId, subject, task], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting task into database');
      } else {
        res.status(201).send(`Task added with ID: ${result.insertId}`);
      }
    });
  });

  

  app.get('/students-with-tasks', (req, res) => {
    pool.query('SELECT students.*, tasks.* FROM students LEFT JOIN tasks ON students.id = tasks.student_id', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error getting students from database');
      } else {
        // Transform the result to group tasks by student
        const students = result.rows.reduce((acc, row) => {
          const student = acc.find((s) => s.id === row.student_id);
          if (student) {
            student.tasks.push({ id: row.task_id, subject: row.subject, task: row.task });
          } else {
            acc.push({
              id: row.student_id,
              name: row.name,
              email: row.email,
              tasks: [{ id: row.task_id, subject: row.subject, task: row.task }],
            });
          }
          return acc;
        }, []);
      
        res.status(200).json(students);
      }
    })
})


console.log(`Server is running on http://${host}:${port}`);



