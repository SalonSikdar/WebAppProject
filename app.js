const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var session = require('express-session');

// import { add } from './function';
// var x = add();
//  console.log(x);

//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'test';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('MongoDB connected');
 
  const db = client.db(dbName);
 
  client.close();
});
const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser());

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/books"));
app.use("/", require("./routes/authors"));
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/users"));


app.use(express.json());
app.use(session({
     secret: 'randomsecretsessioncat',
     resave: 'false',
     saveUninitialized: 'true'
 }));
const PORT = process.env.PORT || 3008;

app.listen(PORT, console.log("Server started on port", PORT));
