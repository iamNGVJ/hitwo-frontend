const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bp = require('body-parser');
const engine = require('ejs-mate');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.join('', '/public')));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(require('./routes'));

module.exports = app;