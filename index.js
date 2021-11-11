const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./app_server/routes/index')
app.use('/courses',indexRouter);

const levelRouter = require('./app_server/routes/level')
app.use('/levels',levelRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));