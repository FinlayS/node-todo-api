var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text : 'Cook dinner'
});

newTodo.save().then(() => {
    console.log('There saved')
}, (e) => {
    console.log('There was an error')
})

var anotherNewTodo = new Todo({
    text: 'Complete challange',
    completed: true,
    completedAt: 850
});

anotherNewTodo.save()
