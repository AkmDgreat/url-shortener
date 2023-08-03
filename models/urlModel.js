const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    shortUrl: {
        type: Number
    }
})

module.exports = mongoose.model("URL", urlSchema)