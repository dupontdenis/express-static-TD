const { courses } = require("../../models/courses");

const menuMap = courses.reduce((acc, { levels, name }) => {
  for (let level of levels) {
    if (!acc.has(level)) {
      acc.set(level, { title: level, subnav: [] });
    }
    acc.get(level).subnav.push({ title: name });
  }
  return acc;
}, new Map());

const menu = Array.from(menuMap.values());

module.exports = {
  menu,
};

// const menu = courses.reduce((acc, { levels, name }) => {
//     for (let level of levels) {
//         let menuItem = acc.find(item => item.title === level);
//         if (!menuItem) {
//             menuItem = { title: level, subnav: [] };
//             acc.push(menuItem);
//         }
//         menuItem.subnav.push({ title: name });
//     }
//     return acc;
// }, []);

// const programme = courses.reduce((a, { levels, name }) => {
//   for (let level of levels) {
//     if (!a[level]) a[level] = [];
//     a[level].push(name);
//   }
//   return a;
// }, {});

// const menu = Object.entries(programme).map(([level, courses]) => ({
//   title: level,
//   subnav: courses.map((course) => ({ title: course })),
// }));
