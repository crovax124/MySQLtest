const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blog',
    password: 'Pa$$word'
  });


module.exports = pool;