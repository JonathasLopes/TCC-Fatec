const express = require('express');
const routes = express.Router();

const PatientController = require('./controller/PatientController');
const AddressController = require('./controller/AddressController');

const patientController = new PatientController();
const address = new AddressController();

routes.get('/', (req, res, next) => {
    res.send('connected in server 3333');
});

routes.post('/patient', patientController.insert);
routes.get('/patient', patientController.get);

routes.post('/address', address.insert);
routes.get('/address/search', address.show);

module.exports = routes;