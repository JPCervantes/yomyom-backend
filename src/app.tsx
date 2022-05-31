'use strict';

// Base imports
const express = require('express');
const app = express();
const cors = require('cors');

// Settings
app.set('port', 8080);
const api = '/api/v1';
const config = require('./config');

// Middleware
app.use(express.json()); // Body-parser
app.use(cors(
    config.application.cors.server
));

// Routers
const createDatabaseRouter = require('./routers/createDatabase')
const categoriesRouter = require('./routers/categories');
const platesRouter = require('./routers/plates');
app.use(`/`, createDatabaseRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/plates`, platesRouter);


// Server
app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`);
})
