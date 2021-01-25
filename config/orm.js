const mysql = require('mysql2');
const connection = require('./connection');
// object relational mapper (orm)

var orm = {

    selectAll: function(targetTable){
        var queryString = "SELECT * from ??";   console.log(queryString);
        connection.query(queryString, [targetTable], function(err, result){
            if (err) throw err; 
            console.log(result);
        });
    },

    insertOne: function(targetTable, col1, val1){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";   console.log(queryString);
        connection.query(queryString, [targetTable, col1, val1], function(err, result){
            if (err) throw err; 
            console.log(result);
        });
    },

    updateOne: function(targetTable, col1, val1){
        var queryString = "UPDATE ??  SET ??  = ?";   console.log(queryString);
        connection.query(queryString, [targetTable, col1, val1], function(err, result){
            if (err) throw err; 
            console.log(result);
        });
    }

} 

module.exports = orm; 