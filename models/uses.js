const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usesSchema = new Schema({
    use: {type: String, required: false},
    stolen: {type: Boolean, required: false},
    clubs: {type: String, required: false}
});

const Uses = mongoose.model("Uses", usesSchema);

module.exports = Uses;