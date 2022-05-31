'use strict';

// Base imports
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Settings
const PORT = process.env.PORT;
const API = process.env.API_URL;
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
app.use(`${API}/categories`, categoriesRouter);
app.use(`${API}/plates`, platesRouter);


// Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
