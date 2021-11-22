const { Schema, model, models } = require('mongoose')

const User = Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    phone: String,
}) 

module.exports = models.User || model('User', User)