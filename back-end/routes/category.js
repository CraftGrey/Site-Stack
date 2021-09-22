const express = require("express");
const router = express.Router();
const mongooose = require("mongoose"); 
const Category = mongooose.model("Category"); 

router.get("/categories" , (req, res) => {
        Category.find()
        .then((categories) => {
            res.json({ categories });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/category-Num" , (req, res) => {
    Category.count({})
    .then((categories) => {
        res.json({ categories });
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post("/new-category" , (req, res) => {
    const { name } = req.body;
    if (! name ) {
        res.json ({ err: "all fields are required " });
    }

    const category = new Category ({
        name,
    });

    category.save().then(() => {
        res.json({ msg: " Category Created " });
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;