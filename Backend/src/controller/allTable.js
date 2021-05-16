const client = require('../database');

class PostTable {
    async insert(request, response, next) {
        try {
            const body = request.body;
            
            // client.connect(err => {
            //     const db = client.db("Prontuario");
                
            //     db.collection('Paciente').find({}).toArray((err, result) => {
            //         if(err) throw err;

            //         return response.json(result);
            //     });
            // });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

module.exports = PostTable;