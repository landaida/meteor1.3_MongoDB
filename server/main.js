import {
  Meteor
} from 'meteor/meteor';
import './global.js';

Meteor.startup(() => {
  connectToMongoDB((db) =>{
    insertDocument(db, 'usuarios', {
      nombre: 'Ariel',
      edad: 31
    }, () =>{
      db.close();
    })
  });
  connectToMongoDB((db) =>{
    findDocuments(db, 'usuarios', (docs) =>{
      if(docs != null){
         docs.each(function(err, doc) {
            if (doc != null) {
               console.log(doc);
            } else {
              docs.count(function(err, count) {
                console.log("There are " + count + " records.");
                db.close();
              });
            }
         });

      }
    });
  });
});
