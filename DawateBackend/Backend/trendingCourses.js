const mongoose = require("mongoose");
const trendingCourseSchema = new mongoose.Schema({
    course:String,
    price:Number,
    duration:Number,
    Image:String,
    description:String
});

module.exports = mongoose.model("trending courses", trendingCourseSchema);