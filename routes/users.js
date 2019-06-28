const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const bodyParsr = require('body-parser');
const bcrypt = require('bcryptjs');

router.post("/users", async (req, res) => {
  console.log(req.body);
  // First Validate The Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if this user already exisits
  let user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(400).send("That user already exisits!");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = bcrypt.hash('req.body.password', salt);
    } catch (error) {
      next(error);
    }

    // Insert the new user if they do not exist yet
    user = new User({
      username: req.body.username,
      password: passwordHash
      // email: req.body.email,
    });

    console.log(user)
    await user.save();
    res.render('login');
    // router.get("/books/:userQuery", (req, res) => res.render('home'));
  }
});

module.exports = router;
