/*jshint esversion: 8 */
const express = require("express");
const mongoose = require("mongoose");
const { Keyword } = require("../models/trend.js");
const router = express.Router();
const fields = ["keyword", "searchVolume", "author", "link"];

router.get("/:keyword", async (req, res) => {
  try {
    if (fields.includes(req.query.includes)) {
      var queryResult = await Keyword.findOne({
        keyword: req.params.keyword
      })
        .select(req.query.includes)
        .select("-_id");

      if (!queryResult) {
        return res.status(400).send("Cannot find Trend by Keyword.");
      }

      return res.status(200).send(queryResult);
    }
    
    var dbResult = await Keyword.findOne({
      keyword: req.params.keyword
    })
      .select("-_id")
      .select("-image");
    if (!dbResult) {
      return res.status(400).send("Cannot find Trend by Keyword.");
    }

    if (req.query) return res.status(200).send(dbResult);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
