const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({path: './config/config.env' });

const app = express();  //app is the instance of express servee

//to keep the server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));