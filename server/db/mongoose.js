var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://FinlayS:HXqRsznQcMUOgxfI@' +
//     'cluster0-shard-00-00-gppje.mongodb.net:27017,' +
//     'cluster0-shard-00-00-gppje.mongodb.net:27017,' +
//     'cluster0-shard-00-00-gppje.mongodb.net:27017/' +
//     'todo?ssl=true&replicaSet=' +
//     'Cluster0-shard-0&authSource=admin');

module.exports = {mongoose};