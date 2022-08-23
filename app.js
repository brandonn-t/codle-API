const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middleware
app.use(bodyparser.json());
app.use(cors());

// Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true} ,() => console.log("connected to DB!"));


app.listen(8080);