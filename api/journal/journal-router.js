const express = require("express");
const knex = require("../../database/dbConfig.js");
const router = require("express").Router();


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
                .where({ id })
                .first()
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

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    knex("journals")
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "Entry not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                errorMessage: "Error updating the account"
            });
        });
});

router.delete("/:id", (req, res) => {
    knex("journals")
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json({ message: `${count} record(s) removed` });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                errorMessage: "Error removing the entry"
            });
        });
});


module.exports = router;