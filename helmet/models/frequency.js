const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frequencySchema = new Schema({
    often: {type: String, required: false},
    bike: [
        {type: Schema.Types.ObjectId, ref: 'Bike'}
    ],
    frequency: [
        {type: Schema.Types.ObjectId, ref: 'Frequency'}
    ],
    client: [
        {type: Schema.Types.ObjectId, ref: 'Client'}
    ]
});

const Frequency = mongoose.model("Frequency", frequencySchema);

module.exports = Frequency;