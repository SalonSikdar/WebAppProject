const express = require('express');
const router = express.Router();

// Books Page 
router.get('/books',(req,res) => res.send('Books'));

// Book Page 
router.get('/book',(req,res) => res.send('Book'));

module.exports = router;