const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const isValid = 0;

router.post('/auth', async (req, res) => {
    if(!req.session.user){
        return res.status(401).send();
    }
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Incorrect username');
    }
    const passwordHash = bcrypt.hash(req.body.password, user.hash);

    if (passwordHash == user.password) {
        res.render('home');
    } else {
        console.log('incorrect password');
    }

});

module.exports = router;