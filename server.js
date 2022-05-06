const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const app = express();

const logger = require('./middleware/logger')
app.use(logger);

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'))
}

// Load env vars
dotenv.config({ path: "./config/config.env" });

//Route files
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
	() => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
