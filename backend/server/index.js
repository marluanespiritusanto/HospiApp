const express = require('express')();
const { PORT, MONGO_URI } = require('../config');
const database = require('../repositories/util/db');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Routes
const {
	UserRoutes,
	AccountRoutes,
	HospitalRoutes,
	DoctorRoutes,
	SearchRoutes,
	UploadRoutes,
	PictureRoutes
} = require('../application/routes');

// Middlewares
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: false }));
express.use(fileUpload());
express.use('/api/v1/user', UserRoutes);
express.use('/api/v1/account', AccountRoutes);
express.use('/api/v1/hospital', HospitalRoutes);
express.use('/api/v1/doctor', DoctorRoutes);
express.use('/api/v1/search', SearchRoutes);
express.use('/api/v1/upload', UploadRoutes);
express.use('/api/v1/picture', PictureRoutes);

// Server up and running
database('mongo', MONGO_URI)
	.then(() => express.listen(PORT, () => console.log(`Backend running on port ${PORT}`)))
	.catch(console.log);
