const express = require('express');

const router = express.Router();


// Books Page
router.get('/books', (req, res) => res.render('books'));

// Book Page
router.get('/books/:userQuery', (req, res) => res.render('book',{data : {userQuery: req.params.userQuery }}));

module.exports = router;
