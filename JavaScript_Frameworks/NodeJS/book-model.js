var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    category: String
});


// Use book with other files
module.exports = mongoose.model('Book', BookSchema);