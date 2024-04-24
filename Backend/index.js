const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7100 ;

app.listen(PORT , ()=>{
    console.log(`this app is running at ${PORT}...`)
})
// database connection
const database = require('./config/database.js');
database();

// routes
app.get('/' , (req , res)=> {
    res.send(`<h1 style="font-size: 50px; background-color : green">API IS RUNNING ...</h1>`)
})

