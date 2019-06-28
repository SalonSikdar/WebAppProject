const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// import { add } from './function';
// var x = add();
//  console.log(x);

//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log("Server started on port", PORT));
