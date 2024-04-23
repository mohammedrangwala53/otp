// Import the mysql module
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL server hostname
  user: 'root', // Change this to your MySQL username
  password: 'mohammed', // Change this to your MySQL password
  database: 'otp',
  port: 3306 // Change this to your MySQL database port
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);

  // Query to retrieve information from the 'test' table
  connection.query('SELECT * FROM test', (err, results, fields) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      return;
    }
    console.log('Retrieved data from the test table:');
    // Loop through the results and log each row
    results.forEach((row) => {
      console.log('Username:', row.username);
      console.log('Password:', row.password);
    });

    // Close the database connection when done
    connection.end((err) => {
      if (err) {
        console.error('Error closing database connection: ' + err.stack);
        return;
      }
      console.log('Database connection closed');
    });
  });
});
