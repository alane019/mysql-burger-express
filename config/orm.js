// object relational mapper (orm)

const connection = require('./connection.js');

/////////////////////////////////////////////////

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
} 

/////////

//convert object from client to SQL syntax
         // e.g. {burger_name: 'Good Burger'} => ["burger_name='Good Burger'"]
         // e.g. {devoured: true} => ["devoured=true"]
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
		// if string with space
		if (typeof value === "string" && value.indexOf(" ") >= 0) {
			value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

/////////

var orm = {
    selectAll: function(targetTable, cb){
        let queryString = "SELECT * from " + targetTable;       

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

    /////////

    insertOne: function(targetTable, cols, vals, cb){
        let queryString = "INSERT INTO " + targetTable;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") "; 
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result){
          if(err) throw err;                   
  
            console.log(result);
            cb(result);
        });
    },

    ////////////

    updateOne: function(targetTable, objColVals, condition, cb){
        var queryString = "UPDATE " + targetTable; 
        queryString += " SET " + objToSql(objColVals); 
        queryString += " WHERE " + condition; 


        connection.query(queryString, function(err, result){
          if (err) console.error(err);    
            cb(result);
            console.log(result);
        });
    }, 


    deleteOne: function(targetTable, condition, cb) {
       let queryStr = "DELETE FROM " + targetTable; 
       queryStr += " WHERE " + condition; 
       
       connection.query(queryStr, function(err, result){
         if(err) throw err; 
         cb(result); 
       });
    }

} 

module.exports = orm; 

