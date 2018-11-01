const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6bdaef64c76ac95f7ebb0896aaa';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if(!todos) {
//         return console.log('No todos')
//     }
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('todo not found')
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// query the users collection by user ID
var id = '5bdac39e92ec01b178a8e610';
User.findById({
    _id : id
}).then((user) => {
    if(!user) {
        return console.log('User not found')
    }
    console.log('User by ID', user)
}, (e) => {
    console.log('There was an error', e);
});
