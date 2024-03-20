const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    course:String,
    price:Number,
    duration:Number,
    Image:String,
    description:String,
});

module.exports = mongoose.model("courses", courseSchema);