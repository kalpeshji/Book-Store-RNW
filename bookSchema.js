const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BookStore')
const BookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    type: {
        type: String
    },
    stock: {
        type: String
    },
    price: {
        type: Number
    },
    published: {
        type: Date
    },
    author: {
        type: String
    }
})

const BookModel = mongoose.model('BOOKS', BookSchema)
module.exports = { BookModel } 