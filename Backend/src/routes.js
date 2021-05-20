const express = require('express');
const routes = express.Router();

const PatientController = require('./controller/PatientController');
const AddressController = require('./controller/AddressController');
const CompanionController = require('./controller/CompanionController');

const patientController = new PatientController();
const address = new AddressController();
const companionController = new CompanionController();

routes.get('/', (req, res, next) => {
    res.send('connected in server 3333');
});

routes.post('/patient', patientController.insert);
routes.get('/patient', patientController.get);

routes.post('/address', address.insert);
routes.get('/address', address.showAll);
routes.get('/address/search', address.show);

routes.post('/companion', companionController.insert);
routes.get('/companion', companionController.showAll);

module.exports = routes;