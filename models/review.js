const mongoose = require('mongoose');
const recipe = require('./recipe')

const reviewSchema = new mongoose.Schema({
    reviewerName: {type: String},
    comment: {type: String, required: true},
    rating: {type: Number, min: 0, max: 5 }
})

module.exports = reviewSchema