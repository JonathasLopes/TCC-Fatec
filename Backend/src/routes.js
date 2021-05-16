const express = require('express');
const routes = express.Router();

const GetPatient = require('./controller/getPatient');

const patientController = new GetPatient();

routes.get('/', (req, res, next) => {
    res.send('connected in server 3333');
});

routes.get('/patient', patientController.get);

module.exports = routes;