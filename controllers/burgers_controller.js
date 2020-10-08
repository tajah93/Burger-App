var express = require("express");

var router = express.Router();

var burgerMod = require("../models/burger.js"); 

router.get("/", function(req, res) {
    burgerMod.selectAll(function(data) {
        var hbObject = {
            burgers: data
        };
        console.log(hbObject);
        res.render("index", hbObject);
    });

    router.post("/api/burgers", function (req, res) {
        burgerMod.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) {
                res.json({ id: result.insertID });
            }
        );
    });

    router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition); 

        burgerMod.updateOne({ devoured: req.body.devoured}, condition, function(result) {
            if( result, changedRows === 0 ) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })

});

module.exports = router; 