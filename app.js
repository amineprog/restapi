const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send("Salam !");
});

app.get('/api/all',function(req,res){
    var data=[];
    data.push("amine","ali");
    res.send(data);
});
app.listen(3000);
console.log('Running on port 3000...');