const express = require('express');
const router = express.Router();

//Authors Page
router.get('/authors',(req,res) => res.render('authors'));

//Author Page
router.get('/author',(req,res) => res.send('Author'));


module.exports = router;