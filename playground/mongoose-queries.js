const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b867556019c96bc037b1b75';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found!');
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

var userId = '5b8501b6cd4584f426c6bbe8';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('userId not found!');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e))
