const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,
    content: String
})


const MongooseModel = mongoose.model("article", articleSchema);
module.exports = MongooseModel;
