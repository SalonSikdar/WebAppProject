const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

// Authors Page
router.get("/authors", (req, res) => {
  (async function main() {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "saloni",
      password: "Mithi@23",
      database: "goodReads"
    });
    console.log("DB Connected in authors");
    const [rows, fields] = await connection.execute("SELECT * FROM `authors`");
    res.render("authors", { authors: rows });
  })();
});

// Author Page
router.get("/authors/:userQuery", (req, res) =>{
  (async function main() {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "saloni",
      password: "Mithi@23",
      database: "goodReads"
    });
    console.log("DB Connected in authors");
    const [rows, fields] = await connection.execute("SELECT * FROM `authors`");
    res.render("author", { authors : rows , data: { userQuery: req.params.userQuery } });
  })();
});


// router.get("/authors/:userQuery", (req, res) =>
//   res.render("author", { data: { userQuery: req.params.userQuery } })
// );

module.exports = router;
