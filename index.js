//import express
const express = require('express');
//invoke express
const app = express();
//import cors
const cors = require('cors');
//Import routes from auth.js
const authRoute = require('../backend/routes/auth');
//Import private review 
const reviewRoute = require('./routes/review');
//Import the connection string in .env file
const dotenv = require('dotenv');
//Connect to mongoose
const mongoose = require('mongoose');

//Initiate the .env file
dotenv.config();

//connect to database 
//Add the option from terminal to avoid Depcription warnings 
//Show if the connection is successful in a callback function and a console log msg 
mongoose.connect(
process.env.DB_CONNECT,
 { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true} , 
() => console.log('connected to db!!!!'))

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//Route Middleware 
app.use('/api/user', authRoute);
app.use('/api/reviews', reviewRoute);

//Run express server in port 5000 & add a callback function to check via console log if the server is running properly
app.listen(5000, () => console.log("Server running on port 5000"));

