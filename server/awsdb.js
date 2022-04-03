const mysql = require('mysql');
const express = require('express');
const expApp = express();
const bodyParser = require('body-parser');
const cors = require('cors')

var connection = mysql.createConnection({
    host     : "xv-db.cbbcel7ahipi.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "3RpePTwPyWsYa60kTP3BNTFP0EpMibbbmrgQ97tb",
    port     : 3306,
    database: "exVaultDB"
});

connection.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
    var sql = "INSERT INTO files (filename, file) VALUES ('Project_Proposal4.pdf', LOAD_FILE('server/Project_Proposal1.pdf'))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    connection.query("SELECT * FROM files", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      
});
