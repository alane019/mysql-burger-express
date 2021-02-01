const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


//controller to handle the http get request that's sent when when index page loads
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
    console.log(" [[  router.get('/', ---->      console.log(hbsObject);    ")
    console.log(hbsObject);

    //  HTTP: GET  =>  RESULT: RENDER (render the handlebars object to a new index html document)
    res.render("index", hbsObject);
    });
});



// controller that uses an API call route to create a new burger
router.post("/api/burgers", function(req,res){
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        result => {
            res.json({ id: result.insertId });
        }
    );
}); 



// controller that uses an API call route to update an existing burger
router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id; 

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// controller that uses an API call route to DELETE an existing burger
router.delete("/api/burgers/:id", function(req,res){
    let condition = "id = " + req.params.id; 
    console.log(" condition: ", condition);

    burger.deleteOne(condition, result => {
        if(result.affectedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router; 