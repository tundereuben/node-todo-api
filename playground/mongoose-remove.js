const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b8747a2e659ce258036e104'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b8747a2e659ce258036e104').then((todo) => {
  console.log(todo);
});
