const express = require("express");
const router = express.Router();

//Home page
router.get("/home", (req, res) => res.render("home"));
// router.get("/", (req, res) => res.render("login_register"));

module.exports = router;
