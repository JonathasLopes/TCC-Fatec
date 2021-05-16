const client = require('../database');

class GetPatient {
    async get(request, response, next) {
        try {
            client.connect(err => {
                const db = client.db("Prontuario");
                
                db.collection('Encaminhamento').find({}).toArray((err, result) => {
                    if(err) throw err;

                    return response.json(result);
                });
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

module.exports = GetPatient;