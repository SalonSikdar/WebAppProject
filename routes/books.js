const express = require('express');
const router = express.Router();

// Books Page 
router.get('/books',(req,res) => res.send('Books'));

module.exports = router;