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

// post new article
router.post("/articles", (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    newArticle.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/articles");
        }
    })
})


module.exports = router;