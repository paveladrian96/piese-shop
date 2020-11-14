const mongoose = require("mongoose")

const distribuitoriSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true,
        maxlength: 60
    },
    photo: {
        data: Buffer,
        contentType: String
    },
}, {timestamps: true})

module.exports = mongoose.model("Distribuitori", distribuitoriSchema)