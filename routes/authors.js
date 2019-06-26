
const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost', user: 'saloni', password: 'Mithi@23', database: 'goodReads',
  });
  console.log('DB Connected');
  const [rows, fields] = await connection.execute('SELECT * FROM `Authors`');
  console.log(rows);
  return rows;
}

// Authors Page
router.get('/authors', (req, res) => {
  const [first] = main();
  res.render('authors', { rows: first });
});

// Author Page
router.get('/authors/:userQuery', (req, res) => res.render('author', { data: { userQuery: req.params.userQuery } }));

module.exports = router;