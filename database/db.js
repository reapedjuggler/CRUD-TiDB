const mysql = require("serverless-mysql");
require('dotenv').config();

// var connection = mysql.createConnection({
//   host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
//   port: 4000,
//   user: '4ZnSNRFS3CWV9Qb.root',
//   password : process.env.PASSWORD,
//   database: 'test',
//   ssl: {
//     minVersion: 'TLSv1.2',
//     rejectUnauthorized: true
//   }
// });
// module.exports = exports = {
//   connection
// }
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  }
});

async function executeQuery(query, values = []) {
  try {
    console.log(query, " here in executeQuery")
    const results = await db.query(query, values);
    console.log(results,  " Successful")
    await db.end();
    return results;
  } catch (error) {
    console.log(error, " error executing query")
    return error;
  }
}

module.exports = exports = {
  db,
  executeQuery
}