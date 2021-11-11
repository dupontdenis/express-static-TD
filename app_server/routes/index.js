const debug = require('debug')('routes');
const express = require('express');
const router = express.Router();

const ctrlCourses = require('../controllers/courses');

router
    .route('/')
    .get(ctrlCourses.coursesReadAll)

router
    .route('/HTML')
    .get(ctrlCourses.courseReadHTML);

router
    .route('/CSS')
    .get(ctrlCourses.courseReadCSS);


module.exports = router;