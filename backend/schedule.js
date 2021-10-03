import mongoose from 'mongoose'

const Schedule = new mongoose.Schema({
    game: {
        type: String,
        required: true
    },
    firstteam: {
        type: String,
        required: true
    },
    secondteam: {
        type: String,
        required: true
    },
    matchdate: {
        type: Date,
        required: true
    },
    matchtime: {
        type: String,
        required: true
    },
    matchprice: {
        type: String,
        required: true
    }
})

const Schedule = mongoose.model("schedule",Schedule);
export default Schedule