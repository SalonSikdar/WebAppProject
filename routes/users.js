const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const bodyParsr = require('body-parser');

router.post("/users", async (req, res) => {
  console.log(req.body);
  // First Validate The Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That user already exisits!");
  } else {
    // Insert the new user if they do not exist yet
    user = new User({
      name: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    await user.save();
    res.send(user);
    // router.get("/books/:userQuery", (req, res) => res.render('home'));

  }
});

module.exports = router;
