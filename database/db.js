const mysql = require("serverless-mysql");
require('dotenv').config();

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
    // console.log(query, " here in executeQuery")
    const results = await db.query(query, values);
    // console.log(results,  " Successful")
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