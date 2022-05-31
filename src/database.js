const mysql = require('mysql'); 

// Creation of connection to database
// const mysqlcon = mysql.createConnection({
//     host: 'localhost',
//     database: 'yomyomtest',
//     user: 'root_yomyom',
//     password: '123456',
//     multipleStatements: true
//   });

const mysqlcon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yomyom_test',
  password: '',
  multipleStatements: true
});

  // Make connection to MySQL
  mysqlcon.connect(function(err) {

    if (err) {
        console.log("Database connection failed!", err);
        return;
    } else {
        console.log('Database connected successfully!');
    }
  });

  module.exports = mysqlcon;