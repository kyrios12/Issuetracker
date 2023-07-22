
const express  = require("express");
//for creating database and using
const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();













app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
  });