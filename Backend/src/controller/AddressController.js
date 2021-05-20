const client = require('../database');
const { ObjectId } = require('mongodb');

class PostTable {
    async insert(request, response, next) {
        try {
            const body = request.body;

            const { CEP, Numero, CPF } = request.body;

            delete body['CPF'];

            client.connect(async err => {
                const db = client.db("Prontuario");

                db.collection('Endereco').insertOne(body).catch(err => {
                    return response.status(400).json(err);
                });

                const result = await db.collection('Endereco').findOne({ CEP: CEP, Numero: Numero });

                await db.collection('Paciente').findOneAndUpdate({ "CPF": CPF }, { $set: { "Endereco": ObjectId(result._id) } }).then(() => {
                    return response.json({ message: 'Deu Tudo Certo! Paciente com endereço!' });
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async showAll(request, response, next) {
        try {
            client.connect(err => {
                const db = client.db("Prontuario");

                db.collection('Endereco').find({}).toArray((err, result) => {
                    if (err) throw err;

                    return response.json(result);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request, response, next) {
        try {
            const cep = request.query.cep;
            const number = request.query.num;

            client.connect(async (err) => {
                const db = client.db("Prontuario");
                const database = db.collection('Endereco');

                const result = await database.findOne({ CEP: cep, Numero: number });

                return response.json(result);
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async update(request, response, next) {
        try {
            client.connect(err => {
                const db = client.db("Prontuario");

                db.collection('Encaminhamento').updateOne().toArray((err, result) => {
                    if (err) throw err;

                    return response.json(result);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

module.exports = PostTable;