 const orm = require('../config/orm.js');

 var burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            console.log(res);
            cb(res);
        });
    },

    insertOne: function(col, val, cb){
        orm.insertOne("burgers", col, val, function(res){
            console.log(res);
            cb(res);
        });
    },

     //ORM params:  targetTable, col1, val1, cb;
    updateOne: function(col, val, cb){
        orm.insertOne("burgers", col, val, function(res){
            console.log(res);
            cb(res);
        });
    }

 };
 module.exports = burger; 