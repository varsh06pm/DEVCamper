const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectdb = require('./config/db');

//load env vars
dotenv.config({path: './config/config.env' });

//connect to database
connectdb();

//route files
const bootcamps = require('./routes/bootcamps');

const app = express();  //app is the instance of express server

//Body parser
app.use(express.json());

//dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//mount routers
app.use('/api/v1/bootcamps',bootcamps);

//to keep the server running
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections
process.on('unhandleRejection', (err,promise) =>{
   console.log(`Error: ${err.message}`);
   //close the server and exit process
   server.close(() => process.exit(1));   
});
