const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://JonasAdm:Jonas123@tccluster.zar2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
