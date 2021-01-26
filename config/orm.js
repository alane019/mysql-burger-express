const mysql = require('mysql2');
const connection = require('./connection');
// object relational mapper (orm)

var orm = {
    selectAll: function(targetTable, cb){
        var queryString = "SELECT * from ??";   console.log(queryString);
        connection.query(queryString, [targetTable], function(err, result){
            if (err) throw err; 
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(targetTable, col1, val1, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"; console.log(queryString);
        connection.query(queryString, [targetTable, col1, val1], function(err, result){
            if (err) throw err; 
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(targetTable, col1, val1, cb){
        var queryString = "UPDATE ??  SET ??  = ?";   console.log(queryString);
        connection.query(queryString, [targetTable, col1, val1], function(err, result){
            if (err) throw err; 
            cb(result);
            console.log(result);
        });
    }



} 

module.exports = orm; 