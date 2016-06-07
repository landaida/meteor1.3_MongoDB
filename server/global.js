import { MongoClient } from 'mongodb';

connectToMongoDB = (callback) => {
  MongoClient.connect('mongodb://127.0.0.1:3001/writeFileOnServer', function(err, db) {
    if (err) {
      throw err;
    } else {
      console.log("successfully connected to the database");
      callback(db);
    }
  });
}

insertDocument = (db, collectionName, insertObject, callback) =>{
  db.collection(collectionName).insertOne(insertObject, function(err, result) {
    if (err) {
      throw err;
    } else {
      console.log("successfully insert");
      callback();
    }
  });
}

findDocuments = (db, collectionName, callback, options = {}) => {
  callback(db.collection(collectionName).find(options));
}
