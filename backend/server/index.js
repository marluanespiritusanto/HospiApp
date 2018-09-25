const express = require('express')();
const { PORT, MONGO_URI } = require('../config');
const database = require('../repositories/util/db');
const bodyParser = require('body-parser');

// Routes
const { UserRoutes, AccountRoutes } = require('../application/routes');

// Middlewares
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: false }));
express.use('/api/v1/user', UserRoutes);
express.use('/api/v1/account', AccountRoutes);

// Server up and running
database('mongo', MONGO_URI)
	.then(() => express.listen(PORT, () => console.log(`Backend running on port ${PORT}`)))
	.catch(console.log);
