// backup @ 1242 on friday 1/27
//const mysql = require('mysql2');

// object relational mapper (orm)

const connection = require('./connection.js');

/////////////////////////////////////////////////

let questionMarks = (arrOfVals, err) => {

    if (err) throw err; 

        let outString = "";
       for(let i = 0; i < arrOfVals.length; i++){
           
    console.log("arrOfVals[i]: " + arrOfVals[i]);
            outString = outString + "? "; 
       }
       
       return outString; 
}



var orm = {
    selectAll: function(targetTable, cb){
        
        var queryString = "SELECT * from " + targetTable;       

        console.log(queryString);
        
        connection.query(queryString, function(err, result){
            if (err) {
            console.error(err)
            }  // throw err; 
            console.log("Select all result is being sent to callback function. ")
            console.log(result);
            cb(result);
        });

    },

    insertOne: function(targetTable, cols, vals, cb){
        var queryString = "INSERT INTO " + targetTable + " (" + questionMarks + ") " + "VALUES ("  +  vals  + ")";
        console.log(queryString);
        connection.query(queryString, [targetTable, cols, vals], function(err, result){
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


// */
