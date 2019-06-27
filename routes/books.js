const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

// Books Page
router.get("/books", (req, res) => {
  (async function main() {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "saloni",
      password: "Mithi@23",
      database: "goodReads"
    });
    console.log("DB Connected in books");
    const [rows, fields] = await connection.execute("SELECT * FROM `books`");
    res.render("books", { books: rows });
  })();
});

// Book Page
router.get("/books/:userQuery", (req, res) =>
  res.render("book", { data: { userQuery: req.params.userQuery } })
);

module.exports = router;
