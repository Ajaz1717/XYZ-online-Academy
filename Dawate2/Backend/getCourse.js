const express = require('express');
const cors = require('cors');
require('./db');
const course = require('./courses');
const trendingCourses = require('./trendingCourses');

const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow these HTTP methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow these headers
    next();
});

app.get('/trendingCourse', async (req, res)=>{
    let trending = await trendingCourses.find();
    res.send(trending);
})

app.get('/course', async (req, res)=>{
    let courses = await course.find();
    res.send(courses)
});

app.get('/search/:key', async (req, res)=>{
    let data = await course.find(
        {
            "$or":[
                {"course":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
})

app.listen(5000);