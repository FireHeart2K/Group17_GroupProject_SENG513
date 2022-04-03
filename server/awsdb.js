
const mysql = require('mysql');
const express = require('express');
const expApp = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs')
var nb = require('buffer');

const port = 3306;
expApp.listen(port, () => console.log(`Listening on port ${port}`));
expApp.use(bodyParser.urlencoded({ extended: true }));
expApp.use(express.json());
expApp.use(cors());

const db = mysql.createConnection({
    host: "xv-db.cbbcel7ahipi.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "3RpePTwPyWsYa60kTP3BNTFP0EpMibbbmrgQ97tb",
    port: port,
    database: "exVaultDB"
});

db.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
    fs.readFile('/Users/Nathan/Group17_GroupProject_SENG513/server/Project_Proposal1.pdf', 'base64', (err, data) => {
        if (err) throw err;
        /*
        var sql = "INSERT INTO files (fileID, fileBLOB) VALUES ('Project_Proposal4.pdf', " + "'" + data + "'" + ")";
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
        */
        db.query("SELECT fileBLOB FROM files WHERE fileID='Project_Proposal4.pdf'", function (err, result, fields) {
            if (err) throw err;
            //https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
            let buff = new Buffer(data, 'base64');
            fs.writeFileSync('Project_Proposal2.pdf', buff);
        });
    });


});
