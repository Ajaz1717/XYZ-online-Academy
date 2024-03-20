const mongoose = require('mongoose');

const trendingCoursesSchema = new mongoose.Schema({
    course:String,
    price:Number,
    duration:Number,
    Image:String,
    description:String
});

module.exports = mongoose.model('trending course', trendingCoursesSchema);