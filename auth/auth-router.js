const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");

// for endpoints beginning with /api/auth
router.post("/signup", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // sign token
        const token = signToken(user);

    
        res.status(200).json({
          token,
          message: `Name: ${user.first_name}, UserID:${user.id}`,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {console.log(error)
      res.status(500).json(error);
    });
});


function signToken(user) {
  const payload = {
    email: user.email,
    role: user.role,
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options); // notice the return
}

module.exports = router;