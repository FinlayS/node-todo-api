//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bd87bb8a466385a1b147c08')
    // },
    //     {
    //         $set: {
    //         completed: true
    //     }
    // },
    //     {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(result)
    // })

    // change name in users and inc age by 1.  Look at docs

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5bd87ece1ad2855a7a699b78')},
        {
            $set: {name: 'Finlay'},
            $inc: {age: -25,}
        }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    //client.close();
});