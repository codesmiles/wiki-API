const Article = require("../model/schema");
const { Router } = require("express");
const router = Router();

router
  .route("/articles")

  .get((req, res) => {
    //   check if there are no articles in the database
    Article.find({}, (err, data) => {
      if (!err) {
        if (data.length === 0) {
          res.send(`<h1>No articles found</h1>`);
        }
      } else {
        console.log(err);
      }
    });
  })

  .get((req, res) => {
    //////////////////// get all articles//////////////////////

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
    //////////////////////// post new article////////////////////
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
    /////////////////////// delete all article/////////////////
    Article.deleteMany({}, (err) => {
      // to see if it works check the console
      if (!err) {
        res.send(`successfully deleted all articles`);
      } else {
        console.log(err);
      }
    });
  });

router
  .route(`articles/:articleTitle`)
  .get((req, res) => {
    /////////////////////// req one article //////////////////
    Article.findOne({ title: req.params.articleTitle }, (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        console.log(err);
      }
    });
    res.redirect("/articles");
  })
  .put((req, res) => {
    /////////////////////// update a whole article //////////////////
    Article.findOneAndUpdate({ title: req.params.articleTitle }, {}, (err) => {
      if (!err) {
        res.send(`successfully updated article`);
      } else {
        console.log(err);
      }
      res.redirect("/articles");
    });
  })
  .patch((req, res) => {
    ///////////////////// update part of an article////////////////////
    Article.findOneAndUpdate({ title: req.params.articleTitle }, {}, (err) => {
      if (!err) {
        res.send(`successfully updated article`);
      } else {
        console.log(err);
      }
      res.redirect("/articles");
    });
  })
  .delete((req, res) => {
    /////////////////////// delete one article //////////////////
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send(`successfully deleted article`);
      } else {
        console.log(err);
      }
    });
    res.redirect(`/articles`);
  });

module.exports = router;
