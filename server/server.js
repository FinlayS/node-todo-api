var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User =mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
})

// var anotherNewTodo = new Todo({
//     text: '    returns      '
// });
//
// anotherNewTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2))
// }, (e) => {
//     console.log('There was an error', e)
// })


///  new user model:
// CHALLANGE
var newUser = new User({
    email: 'user1@1.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
    console.log('Another bloddy error', e)
})