const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();

//habilitadas solicitações HTTP e Web socket
const server = require('http').server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://uriel:ZO504dsdvc1gc9Ld@cluster0-kxyyz.mongodb.net/test?retryWrites=true&w=majority'
, { useNewUrlParser:true });

//adicionado middleware antes das rotas para ser acessado nos controllers
//next para garantir que seja executado ao ser interceptado pelo node
app.use((req, res, next)=>{
    req.io = io;
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads','resized')));

app.use(require('./routes'));

//app.listen(3333);
server.listen(3333);