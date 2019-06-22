const express = require('express');

const router = express.Router();


// Books Page 
router.get('/books',(req,res) => res.render('books'));

// Book Page 
router.get('/',(req,res) => res.send('book'));

module.exports = router;