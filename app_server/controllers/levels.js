const { courses  } = require('../models/courses');
const debug = require('debug')('controller:levels')

const programme = courses.reduce((a, { levels: levels, name }) => {
    for (let level of levels) {
        if (!a[level]) a[level] = [];
        a[level].push(name);
    }
    return a;
}, {});


const menu = Object.entries(programme).map(([level, courses]) => {
    return {
        title: level,
        subnav: courses.map((course) => {
            return { title: course }
        })
    }
})

debug(JSON.stringify(menu));

const levelsReadALL = (req, res) => {
    res.render('niveau', { menu });
}

module.exports = {
    levelsReadALL,
};