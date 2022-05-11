const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    name: String,
    year: Number,
    branch: String,
    batch: String,
    email: String,
    password: String
})

module.exports = new mongoose.model("Student", registrationSchema)