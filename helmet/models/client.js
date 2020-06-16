const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    first: {type: String, required: false},
    last: {type: String, required: false},
    email: {type: String, required: false},
    dob_month: {type: String, required: false},
    dob_day: {type: Number, required: false},
    dob_year: {type: Number, required: false},
    zip: {type: Number, required: false},
    bike: [
        {type: Schema.Types.ObjectId, ref: 'Bike'}
    ],
    frequency: [
        {type: Schema.Types.ObjectId, ref: 'Frequency'}
    ],
    Uses: [
        {type: Schema.Types.ObjectId, ref: 'Uses'}
    ]
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;