const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usesSchema = new Schema({
    use: {type: Array, required: false},
    stolen: {type: Boolean, required: false},
    clubs: {type: Array, required: false},
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

const Uses = mongoose.model("Uses", usesSchema);

module.exports = Uses;