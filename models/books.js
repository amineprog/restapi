var mongoose = require("mongoose");

// Genre Schema

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    upage_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Books', bookSchema);

// get Genres 

module.exports.getBooks = function (callBack, limit) {
    Book.find(callBack).limit(limit);
}       