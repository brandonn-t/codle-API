const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

app.use(bodyparser.json());


// Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true} ,() => console.log("connected to DB!"));


app.listen(3000);