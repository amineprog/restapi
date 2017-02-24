const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Genre=require('./models/genre');
Book=require('./models/books');
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
var data=[];
app.get('/',function(req,res){
    res.send("Salam !");
});

app.get('/api/genres',function(req,res){       
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });    
});

app.get('/api/books',function(req,res){       
    Book.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    });    
});

app.listen(3000);
console.log('Running on port 3000...');