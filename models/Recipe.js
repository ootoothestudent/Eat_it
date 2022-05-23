// models/Book.js

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({

    
    dish: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    instructions: {
        type: [String]
    },
    nutrition: {
        type: [String]
    },
    tools: {
        type: [String]
    }
});

// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     isbn: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     published_date: {
//         type: Date
//     },
//     publisher: {
//         type: String
//     },
//     updated_date: {
//         type: Date,
//         default: Date.now
//     }
// });
module.exports = Recipe = mongoose.model('recipe', RecipeSchema);

// module.exports = Book = mongoose.model('book', BookSchema);