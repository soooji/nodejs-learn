var dbcon = require('./demo_db_connection');
dbcon.connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    dbcon.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });