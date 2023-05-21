const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'Aritra', // Replace with your MySQL username
  password: 'mju7MKO)', // Replace with your MySQL password
  database: 'notes_db' // Replace with your MySQL database name
});

// Add a new note to the database
app.post('/api/notes', (req, res) => {
  const { content, date } = req.body;

  const query = 'INSERT INTO notes (content, date) VALUES (?, ?)';
  pool.query(query, [content, date], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Failed to add note' });
    } else {
      const note = { id: results.insertId, content, date };
      res.status(201).json({ note });
    }
  });
});

// Fetch all notes from the database
app.get('/api/notes', (req, res) => {
  const query = 'SELECT * FROM notes';
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Failed to fetch notes' });
    } else {
      res.status(200).json({ notes: results });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

