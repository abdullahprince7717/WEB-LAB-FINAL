const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MatchSchema = new Schema({

    team1: String,
    team2: String,
    city: String,
    date: Date

});

const matchModel = mongoose.model("matches", MatchSchema);

module.exports = matchModel;