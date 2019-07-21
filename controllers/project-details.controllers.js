const config = require('../config/database.js');
var sql = require('mssql'); // MS Sql Server client

var sqlConfig = {
    user: 'sa',
    password: 'abc@1234',
    server: 'EESBLRW342\SQLEXPRESS',
    database: 'HCT'
}

exports.getProjects = (req, res) => {
    console.log("author registration");
    sql.connect(sqlConfig, function() {
        console.log("Connected successfully!");
        var request = new sql.Request();
        request.query('select * from Project Cadence', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
}
