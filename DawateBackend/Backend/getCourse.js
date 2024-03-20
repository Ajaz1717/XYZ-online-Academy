const express = require('express');
require('./db');
const Course = require('./courses');
const TrendingCourses = require('./trendingCourses');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow these HTTP methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow these headers
    next();
});

// Trending Courses

app.delete("/trendingDelete/:course", async (req, res)=>{
    const result = await TrendingCourses.deleteOne({course:req.params.course})
    res.send(result)
})

app.post('/addTrendingCourses', async (req, res)=>{
    let trendingCourses = new TrendingCourses(req.body);
    let result = await trendingCourses.save();
    res.send(result);
    // console.log(req.body)
})

app.get('/trendingCourse', async (req, res)=>{
    let trendingCo = await TrendingCourses.find();
    res.send(trendingCo)
})

// Main Courses.

app.delete("/delete/:course", async (req, res)=>{
    const result = await Course.deleteOne({course:req.params.course})
    res.send(result)
})

app.post('/addCourse', async (req, res)=>{
    let course = new Course(req.body);
    let result = await course.save();
    res.send(result);
    // console.log(req.body);
})


app.get('/course', async (req, res)=>{
    let courses = await Course.find();
    res.send(courses)
})

app.listen(5000);