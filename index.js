
const express  = require("express");
//for creating database and using
const db = require('./config/mongoose');
const port = 8000;
const app = express();
const path = require('path');







app.set('view engine', 'ejs');
app.set('views', './views');



//Using express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
  });