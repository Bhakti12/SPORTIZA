import mongoose from 'mongoose'

const Tournament = new mongoose.Schema({
    gamename: {
        type:String,
        required: true
    },
    gametype: {
        type: String,
        required: true
    },
    playerparticipate: {
        type: Number,
        required: true
    },
    totalplayer: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    entryfees: {
        type: Number,
        required: true
    },
    winprice: {
        type: String,
        required: true
    }
})

const Tournament = mongoose.model("tournament",Tournament);
export default Tournament