const {Schema, model,Types} = require('mongoose');

const matchSchema = new Schema({
    team:{type: String},
    game:{type:String},
    opposingTeam:{type: String},
    dateTime: {type: Date},
    score:{type: Boolean, default: false},
    location:{type:String}
})

module.exports = model('Match', matchSchema)