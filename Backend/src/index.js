const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://uriel:123@cluster0-kxyyz.mongodb.net/test?retryWrites=true&w=majority'
, { useNewUrlParser:true });

app.get('/', (req, res)=>{
    return res.send(`Hello ${req.query.name}`);
});

app.listen(3333);