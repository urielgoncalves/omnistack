const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://uriel:ZO504dsdvc1gc9Ld@cluster0-kxyyz.mongodb.net/test?retryWrites=true&w=majority'
, { useNewUrlParser:true });

app.use(require('./routes'));

app.listen(3333);