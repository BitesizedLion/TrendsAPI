/*jshint esversion: 8 */
//Name of folder shld be changed to models
const mongoose = require("mongoose");

/*  schema for how/what shld be in the document stored in the DB... add min/max lenght and req and uniq and check type
    later. works as a second layer of protection, ensure that DB stores valid data. */
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

//creates a mongoose model for creating users
const Keyword = mongoose.model("Keyword", keywordSchema);

module.exports.Keyword = Keyword;
