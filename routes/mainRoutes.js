const Article = require("../model/schema");
const { Router } = require("express");
const router = Router();

// get all articles
router.get("/articles", (req, res) => {

    Article.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.render("index", { articles: data });
            res.send(data);
        }
    })
})


module.exports = router;