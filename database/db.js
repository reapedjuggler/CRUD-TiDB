const mysql = require("mysql2");
const dotenv = require('dotenv');
var connection = mysql.createConnection({
  host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: '4ZnSNRFS3CWV9Qb.root',
  password : process.env.PASSWORD,
  database: 'test',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});
module.exports = exports = {
  connection
}

// connection.connect(function(err) {
//   if (err) {
//     throw err
//   }
//   connection.query('SELECT DATABASE();', function(err, rows) {
//     if (err) {
//       throw err
//     }
//     console.log("Successfully connected")
//     console.log(rows[0]['DATABASE()']);
//     connection.end()
//   });
//   // connection.query("CREATE DATABASE aaryan", (err, resp) => {
//     if (err) {
//       console.log(`Inside err + ${err}`)
//       throw err
//     }
//     console.log("resp -> ", resp)
//   // })
//   connection.query("SHOW DATABASES;", (err, resp) => {

//   })
//   connection.query("INSERT INTO person VALUES(1,'sad','hehe');")

//   // console.log("->", connection.query("SELECT * FROM person"))
// });
