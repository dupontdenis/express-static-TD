const debugReadAll = require('debug')('controller:ReadAll')
    , debugReadHTML = require('debug')('controller:ReadHTML')

const { courses } = require('../models/courses');

const coursesReadAll = (req, res) => {
    debugReadAll({ courses })
    res.render('list', { courses });
}
const courseReadHTML = (req, res) => {
    const courseHTML = courses.find(({ name }) => name == 'HTML');
    debugReadHTML(courseHTML)
    res.render('detail', { course: courseHTML });
}
const courseReadCSS = (req, res) => {
    const courseCSS = courses.find(({ name }) => name == 'CSS')
    res.render('detail', { course: courseCSS });
}

module.exports = {
    coursesReadAll,
    courseReadHTML,
    courseReadCSS,
};