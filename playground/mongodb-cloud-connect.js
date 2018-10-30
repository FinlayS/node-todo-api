const MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://FinlayS:HXqRsznQcMUOgxfI@' +
    'cluster0-shard-00-00-gppje.mongodb.net:27017,' +
    'cluster0-shard-00-00-gppje.mongodb.net:27017,' +
    'cluster0-shard-00-00-gppje.mongodb.net:27017/' +
    'todo?ssl=true&replicaSet=' +
    'Cluster0-shard-0&authSource=admin';

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('todo');

    db.collection('Todos').insertOne({
        text: 'Something to do 2',
        completed: 'true'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.collection('Users').insertOne({
        name: 'Sheenars',
        age: 12,
        location: 'Comservatory'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});