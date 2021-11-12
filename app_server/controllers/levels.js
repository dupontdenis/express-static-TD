const debug = require('debug')('controller:levels')
const { menu } = require('../controllers/utils/trans');

debug(JSON.stringify(menu));

const levelsReadALL = (req, res) => {
    res.render('niveau', { menu });
}

module.exports = {
    levelsReadALL,
};