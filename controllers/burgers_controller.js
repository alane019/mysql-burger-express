const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");
const connection = require('../config/connection.js');

// sql select route
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

// sql insert route
//orm params are:  (col, val, cb)
router.post("/api/burgers", function(req,res){
    burger.insertOne(req.body.burger_name,
         req.body.devoured, function(result){
             res.json({ id: result.insertId });
         });
});

// sql update route
// orm params are targetTable, col1, val1, cb;
router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id; 

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 