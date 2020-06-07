const {Schema, model} = require('mongoose');

const playerSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    birthday: {
        day: Number,
        mouth: String,
        year: Number
    },
    email: {type: String},
    password: {type: String}
})

module.exports = model('Player',playerSchema)
