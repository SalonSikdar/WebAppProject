const express = require('express');
const router = express.Router();

//Authors Page
router.get('/authors',(req,res) => res.send('Authors'));

//Author Page
router.get('/author',(req,res) => res.send('Author'));


module.exports = router;