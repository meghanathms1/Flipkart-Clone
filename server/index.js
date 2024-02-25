const express = require('express');
const Connection = require('./database/db.js');
const DefaultData = require('./default.js')


const app = express();

const PORT =8000;

Connection();

app.listen(PORT,()=>{console.log(`Server listening on ${PORT}`)});

DefaultData()