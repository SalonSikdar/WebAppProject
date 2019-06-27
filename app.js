const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");

// import { add } from './function';
// var x = add();
//  console.log(x);

const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/books"));
app.use("/", require("./routes/authors"));

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log("Server started on port", PORT));
