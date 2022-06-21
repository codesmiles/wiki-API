const Article = require("../model/schema");
const { Router } = require("express");
const router = Router();

router
  .route("/articles")

  .get((req, res) => {
    // get all articles

    Article.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // res.render("index", { articles: data });
        res.send(data);
      }
    });
  })
  .post((req, res) => {
    // post new article
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`successfully added new article`);
        res.redirect("/articles");
      }
    });
  })
  .delete((req, res) => {
    // delete all article
    Article.deleteMany({}, (err) => {
      // to see if it works check the console
      if (!err) {
        res.send(`successfully deleted all articles`);
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;
