// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server...');
  console.log('===================================');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b83b57de659ce2a0c88e064')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // });

  // findOneAndUpdate with $inc operator
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7fed462c18061f68fb0e64')
  }, {
    $set: {
      name: 'Ellipse Lucent Consulting'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // ------------------------------------//
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7fed462c18061f68fb0e64')
  }, {
    $inc: {
      age: +5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();

});
