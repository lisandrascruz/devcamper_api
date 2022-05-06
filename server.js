const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({status: {success: true},data: {welcome: 'hello', farewell: 'goodbye'}})
})

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
