const mongoose = require('mongoose');
const url = 'mongodb://localhost:127.0.0.1/db';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error 
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   

db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});
//exporting module
module.exports=db;  