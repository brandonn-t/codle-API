const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    letterCount: {
        type: Number,
        required: true
    },
    word: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Posts', PostSchema);