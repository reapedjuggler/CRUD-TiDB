const mysql = require("mysql2")

var connection = mysql.createConnection({
  host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: '4ZnSNRFS3CWV9Qb.root',
  password: 'PCrtagzV9H7RPX4m',
  database: 'test',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});

connection.connect(function(err) {
  if (err) {
    throw err
  }
  connection.query('SELECT DATABASE();', function(err, rows) {
    if (err) {
      throw err
    }
    console.log("Successfully connected")
    console.log(rows[0]['DATABASE()']);
    connection.end()
  });
});