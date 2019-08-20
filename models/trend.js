/*jshint esversion: 8 */
const mongoose = require("mongoose");
const keywordSchema = new mongoose.Schema({
  keyword: {
    type: String,
    unique: true
  },
  searchVolume: {
    type: Number
  },
  author: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  }
});

const Keyword = mongoose.model("Keyword", keywordSchema);

module.exports.Keyword = Keyword;
