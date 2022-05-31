const mysql = require('mysql'); 
require('dotenv').config()

const mysqlcon = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  multipleStatements: true
});

  // Make connection to MySQL
  mysqlcon.connect(function(err) {

    if (err) {
        console.log('Database connection failed!', err);
        return;
    } else {
        console.log('Database connected successfully!');
    }
  });

  module.exports = mysqlcon;