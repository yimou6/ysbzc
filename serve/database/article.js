const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Article', Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    tag: [String],
    createDate: Date,
    updateDate: {
        type: Date,
        default: Date.now()
    },
    md: String,
    html: String
}))
