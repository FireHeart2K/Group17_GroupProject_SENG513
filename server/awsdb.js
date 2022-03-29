var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : "xv-db.cbbcel7ahipi.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "3RpePTwPyWsYa60kTP3BNTFP0EpMibbbmrgQ97tb",
    port     : 3306
});

connection.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

connection.end();