const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Tag', Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }
}))
