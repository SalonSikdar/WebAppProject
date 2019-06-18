/* eslint-disable no-console */
/* eslint-disable no-var */
// eslint-disable-next-line no-var
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "saloni",
  password: "Mithi@23"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});