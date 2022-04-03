const mysql = require('mysql');
const express = require('express');
const expApp = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const port = 3306;
expApp.listen(port, () => console.log(`Listening on port ${port}`));
expApp.use(bodyParser.urlencoded({extended: true}));
expApp.use(express.json());
expApp.use(cors());

const db = mysql.createConnection({
    host     : "xv-db.cbbcel7ahipi.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "3RpePTwPyWsYa60kTP3BNTFP0EpMibbbmrgQ97tb",
    port     : port,
    database: "exVaultDB"
});

db.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
    var sql = "INSERT INTO files (filename, file) VALUES ('Project_Proposal4.pdf', LOAD_FILE('server/Project_Proposal1.pdf'))";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    db.query("SELECT * FROM files", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      
});
