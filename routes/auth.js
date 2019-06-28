const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const isValid =0;

router.post('/auth', async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Incorrect username');
    }

    /*const validPassword = await*/
    // if (!validPassword) {
    //     return res.status(400).send('Incorrect password.');
    // }
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }

    // console.log(req.body);
    // console.log(user)
    // console.log(user.password);
    // console.log(req.body.password)

    // console.log(req.body.password==) 
    try{
       const isValid = await bcrypt.compare(user.password,req.body.password);
    }catch(error){
        throw new Error(error);
    }

    if (isValid) {
        res.render('home');
    } else {
        console.log('incorrect password');
    }

});

module.exports = router;