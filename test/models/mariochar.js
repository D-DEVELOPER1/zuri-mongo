const mongoose = require("mongoose")

const schma = mongoose.Schema;

const myschma = new schma({
    name: String,
    weight: Number
})

const my_schma = mongoose.model("root", myschma)

module.exports = my_schma;