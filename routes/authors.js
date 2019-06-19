const express = require('express');
const router = express.Router();

//Authors Page
router.get('/authors',(req,res) => res.send('Authors'));

module.exports = router;