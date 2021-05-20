const client = require('../database');

class PatientController {
    async insert(request, response, next) {
        try {
            const body = request.body;

            client.connect(err => {
                const db = client.db("Prontuario");

                db.collection('Paciente').insertOne(body).then(() => {
                    return response.json({ message: 'Deu tudo certo!' })
                }).catch(err => {
                    return response.status(400).json(err);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async get(request, response, next) {
        try {
            client.connect(err => {
                const db = client.db("Prontuario");
                
                db.collection('Paciente').find({}).toArray((err, result) => {
                    if(err) throw err;

                    return response.json(result);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

module.exports = PatientController;