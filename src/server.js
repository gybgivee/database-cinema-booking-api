const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Tell express to use your routers here
const customerRouter = require('./routers/customer');
const movieRouter = require('./routers/movie');
const screenRouter = require('./routers/screen');
const tiketRouter = require('./routers/ticket');

app.use('/customers', customerRouter);
app.use('/movies', movieRouter);
app.use('/screens', screenRouter);
app.use('/tickets', tiketRouter);



module.exports = app
