const client = require('../database');
const { ObjectId } = require('mongodb');

class CompanionController {
    async insert(request, response, next) {
        try {
            const body = request.body;

            const { CPFPaciente } = request.body;

            delete body['CPFPaciente'];

            client.connect(async err => {
                const db = client.db("Prontuario");

                const result = await db.collection('Paciente').findOne({ CPF: CPFPaciente });

                body.Acompanha = ObjectId(result._id);

                await db.collection('Acompanhante').insertOne(body).then(() => {
                    return response.json({ message: 'Deu tudo certo!' });
                }).catch(err => {
                    return response.status(400).json(err);
                });
            });

        } catch(error) {
            return response.status(500).json(error);
        }
    }

    async showAll(request, response, next) {
        try {
            client.connect(err => {
                const db = client.db("Prontuario");

                db.collection('Acompanhante').find({}).toArray((err, result) => {
                    if (err) throw err;

                    return response.json(result);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

module.exports = CompanionController;