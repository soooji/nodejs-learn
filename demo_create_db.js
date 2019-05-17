var dbcon = require('./demo_db_connection');
dbcon.connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    dbcon.connection.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});