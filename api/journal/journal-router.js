const journalRouter = require("express").Router();

const Journal = require("./journal-model.js");
// const restricted = require("../auth/restricted-middleware.js");


journalRouter.get("/", (req, res) => {
  Journal.find()
    .then(entries => {
      res.json(entries);
    })
    .catch(err => {console.log(err)
      res.send(err)
    });
});



module.exports = router;