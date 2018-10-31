//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bd87eb2d8c3345a6e48d585')

    }).then((result) => {
        console.log(result);
    });


    db.collection('Users').deleteMany({name: 'Finneres'})
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something I\'ll never do'}).then((result) => {
    //     console.log(result);
    // });


    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    //client.close();
});