const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/zuri-mongo")
mongoose.connection.once("open", () => {
    console.log("connection has been made, now make fireworks...")
}).on("error", (error) => {
    console.log("connection error", error)
})