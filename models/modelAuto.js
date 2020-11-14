const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const modelAutoSchema = new mongoose.Schema({
    nume: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    anAparitie: {
        type: String,
        trim: true,
        required: true,
        maxlength: 6
    },
    anDisparitie: {
        type: String,
        trim: true,
        required: true,
        maxlength: 6
    },
    marcaAuto: {
        type: ObjectId,
        ref: 'MarcaAuto',
        required: true
    },
    caroserie: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    },
    motor: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15,
    },
    descriere: {
        type: String,
        maxlength: 15,
        default: ''
    },
    photo: {
        data: Buffer,
        contentType: String
    },
   
}, {timestamps: true})

module.exports = mongoose.model("ModelAuto", modelAutoSchema)