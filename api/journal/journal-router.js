const express = require("express");
const knex = require("../../database/dbConfig.js");
const router = require("express").Router();

// const Journal = require("./journal-model.js");
// const restricted = require("../auth/restricted-middleware.js");


router.get("/", (req, res) => {
    knex
    .select("*")
    .from("journals")
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "Error getting the entries" });
    });
});

router.post("/", (req, res) => {

    const journalData = req.body;
  
    knex("journals")
      .insert(journalData)
      .then(ids => {
  
        const id = ids[0];
  
        return knex("journals")
          .select("exercise", "weight", "sets", "reps", "notes")
        //   .where({ id })
        //   .first()
          .then(entry => {
            res.status(201).json(entry);
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error adding the entry"
        });
      });
  });
  

module.exports = router;