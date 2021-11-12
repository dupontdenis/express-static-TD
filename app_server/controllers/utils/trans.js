const { courses  } = require('../../models/courses');

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

module.exports = {
    menu,
}