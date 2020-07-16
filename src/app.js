require('./db');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const api = require('./routers');
const { notFound, errorHandler } = require('./middlewares/errors');

const app = express();

app.set('trust proxy', 1);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(compression());
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use('/', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
