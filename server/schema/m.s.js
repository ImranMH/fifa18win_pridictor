//const mongoose = require('mongoose');
const TeamModel = require('../model/team.model')
module.exports = function (mongoose) {
  const Schema = mongoose.Schema;
  //ObjectId = Schema.ObjectId;

  const MatchSchema = new Schema({
    matchNo: Number,
    teamOne: { type: Schema.Types.ObjectId, ref: 'TeamModel' },
    teamTwo: { type: Schema.Types.ObjectId, ref: 'TeamModel' },
    winner: { type: Schema.Types.ObjectId, ref: "TeamModel" },
    looser: { type: Schema.Types.ObjectId, ref: "TeamModel" },
    drow: { type: Boolean, default: false },
    winScore: Number,
    loseScore: Number,
    scorer: [{ type: Schema.Types.ObjectId, ref: "PlayrModel" }],
    group: String,
    playDate: Date,
    playTime: String,
    stadium: String
  });


  const MatchModel = mongoose.model('MatchModel', MatchSchema);


  return MatchModel;
}