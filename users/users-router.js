const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

function checkRole(req, res, next) {
  if (req.token && req.token.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: `Access denied, please login as Admin` });
  }
};

router.get("/", restricted, checkRole, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    });
});



module.exports = router;