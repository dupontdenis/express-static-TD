const express = require('express');
const router = express.Router();

const ctrlLevels = require('../controllers/levels');


router
    .route('/')
    .get(ctrlLevels.levelsReadALL);


module.exports = router;