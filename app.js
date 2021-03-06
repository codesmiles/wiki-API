const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

// middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", mainRoutes);

// SET UP MONGOOSE CONNECTION------------------
const url = `mongodb://localhost:27017/wikiDB`;
// connect to mongoose
mongoose.connect(url, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Connected to MongoDB`);
});
// --------------------------------------------


const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})