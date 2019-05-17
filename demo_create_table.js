var dbcon = require('./demo_db_connection');
dbcon.connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    dbcon.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});