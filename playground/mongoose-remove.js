const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });


//Todo.findOneAndRemove({_id: ﻿5be6e3a4d9fe34d1fbfc100a}).then((todo) => {

// })
Todo.findByIdAndRemove('5be6e3a4d9fe34d1fbfc100a').then((todo) => {
    console.log(todo)
})