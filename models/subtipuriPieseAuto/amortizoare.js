const mongoose = require("mongoose")
const { stringify } = require("uuid")
const {ObjectId} = mongoose.Schema

const amortizoareSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true,
        maxlength: 30
    },
    subtip: {
        type: ObjectId,
        ref: 'SubtipPieseAuto',
        required: true
    },
    masina: {
        type: Array,
        default: []
    },
    distribuitor: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    cod_produs: {
        type: String,
        required: true,
        maxlength: 30
    },
    reducere: {
        type: Number,
        default: 0 
    },
    pret: {
        type: Number,
        required: true,
    },
    cantitate: {
        type: Number,
        required: true,
    },
    vandute: {
        type: Number,
        default: 0
    },
    specificatii: {
        type: String,
        default: "",
        maxlength: 1000
    },
    photo: {
        data: Buffer,
        contentType: String
    },
}, {timestamps: true})

module.exports = mongoose.model("Amortizoare", amortizoareSchema)