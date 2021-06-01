const express = require ('express');

const app = express();
const mongoose = require('mongoose')
require ("dotenv").config({path:'./config/.env'});

const user = require("./model/user");

app.use('/',require('./router/user'))
app.use(express.json());

const uri = process.env.db_uri
mongoose.connect (uri, 
    {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify:false,
useUnifiedTopology: true
},
(err) => {
    if (err) throw err;
    console.log("db connected");
  });

  



app.listen(9000, ()=>{
    console.log('connected')
})
