const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'saloni',
  password: 'Mithi@23',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// module.exports = connectToMysql;
