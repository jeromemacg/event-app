const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    name: String,
    content: String,
    date: Date,
    isActive:Boolean,

});

module.exports = mongoose.model('comment', commentSchema, 'comments');
