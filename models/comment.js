const mongoose = require('mongoose')

const Schema = mongoose.Schema

//schema is a structure
const commentSchema = new Schema({
    username: { type: String, required: true },
    comment: { type: String, require: true }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment