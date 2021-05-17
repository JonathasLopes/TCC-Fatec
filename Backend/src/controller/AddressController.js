const client = require('../database');

class PostTable {
    async insert(request, response, next) {
        try {
            const body = request.body;

            client.connect(err => {
                const db = client.db("Prontuario");

                db.collection('Endereco').insertOne(body).then(() => {
                    return response.json({ message: 'Deu tudo certo!' })
                }).catch(err => {
                    return response.status(400).json(err);
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

                db.collection('Encaminhamento').find({}).toArray((err, result) => {
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