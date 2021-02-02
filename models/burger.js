// import ORM to interact with database
var orm = require('../config/orm.js');

 var burger = {

    // use ORM to retrieve all burgers from database
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
               console.log(res);
               cb(res);
        });
    },

    // array variables are passed into cols and vals parameters
    // cols specifies where the vals should be inserted in the burgers database
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){    
            console.log(res);  
            cb(res);  
        });
    },

    // col
    updateOne: function(cols, condition, cb){
        orm.updateOne("burgers", cols, condition, function(res){
            console.log(res);
            cb(res);  
        });
    },

    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, result => {
            cb(result); 
        });
    }

 }; // end burger

 module.exports = burger; 