const mysql = require('mysql2');

 const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: "",
   database: 'onlinetest'
 });

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the MySQL database');
    connection.release();
  }
});

module.exports = pool;

