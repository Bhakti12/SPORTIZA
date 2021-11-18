import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const tourSchema = mongoose.Schema({
    gamename:String,
    gametype:String,
    playerparticipate:Number,
    totalplayer:Number,
    place:String,
    startdate:Date,
    enddate:Date,
    entryfees:Number,
    winprice:Number
});

autoIncrement.initialize(mongoose.connection);
tourSchema.plugin(autoIncrement.plugin, 'tournament');
// we need to turn it into a model
const postTournament = mongoose.model('tournament', tourSchema);

export default postTournament;