const express = require('express');
const routes = express.Router();

const GetPatient = require('./controller/getPatient');
const AddressController = require('./controller/AddressController');

const patientController = new GetPatient();
const address = new AddressController();

routes.get('/', (req, res, next) => {
    res.send('connected in server 3333');
});

routes.get('/patient', patientController.get);

routes.post('/address', address.insert);
routes.get('/address/search', address.show);

module.exports = routes;