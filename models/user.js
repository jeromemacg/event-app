const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    first_name: String,
    Last_name: String,
    email: String,
    password: String,
    comments: [
        {   id: String,
            content: String,
        }
        ],
    events: [
        {
            id: String
        }
    ],
    isActive: Boolean

});

module.exports = mongoose.model('user', userSchema, 'users');
