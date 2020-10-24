// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// getting-started.js
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mycustomers', {useNewUrlParser: true}, {useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

// const kittySchema = new mongoose.Schema({
//     name: String
//   });


var express = require('express');
var apps = express();
var bodyPartse = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');


var db = 'mongodb://localhost/example';

mongoose.connect(db);

var port = 8080;

apps.listen(port, function () {
    console.log('app listening on port ' + port);
});

