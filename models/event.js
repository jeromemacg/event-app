const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: String,
    content: String,
    date: Date,
    isActive: Boolean,

});

module.exports = mongoose.model('event', eventSchema, 'events');
