var mysql = require('mysql');
const fs = require('fs')
var nb = require('buffer');


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
    fs.readFile('/Users/Nathan/Group17_GroupProject_SENG513/server/Project_Proposal1.pdf', 'base64',(err, data) => {
      if (err) throw err;
      //var data1 = new nb.Blob(data);

      /*
      var sql = "INSERT INTO files (fileID, fileBLOB) VALUES ('Project_Proposal4.pdf', " + "'" + data + "'" + ")";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      */
      connection.query("SELECT fileBLOB FROM files WHERE fileID='Project_Proposal4.pdf'", function (err, result, fields) {
          if (err) throw err;
          //https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
          let buff = new Buffer(data, 'base64');
          fs.writeFileSync('Project_Proposal2.pdf', buff);
        });
    });

      
});
