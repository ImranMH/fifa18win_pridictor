const mongoose = require('mongoose');
module.exports = function( mongoose) {
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const TeamSchema = new Schema({
    ranking   : Number ,
    name     : String,
    continent      : String,
    flag      : String,
    appearence      : Number,
    players      : [{type: Schema.Types.ObjectId, ref: "PlayerModel"}],
    group      : String,
    standing      : Number,
    resultSummer      : [String],
    point      : Number,
    goalFor      : Number,
    goalAganist      : Number,
    goalDiff      : Number,
    play      : Number,
    win      : Number,
    draw      : Number,
    lost      : Number,
    opponent      :{type: Schema.Types.ObjectId, ref: "TeamModel"},
    opponents      :{type: Schema.Types.ObjectId, ref: "TeamModel"},
    status      : String,
	});


//const TeamModel = mongoose.model('TeamModel', TeamSchema);


return TeamSchema;
}