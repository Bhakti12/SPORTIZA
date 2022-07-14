//const { listItemIconClasses } = require("@mui/material");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();//to start a new express application under app variable.

app.use(bodyparser.urlencoded({extended : true}))//for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.
