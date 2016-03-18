/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) { 
    db.collection('movies').insert(doc, function(error,result){ 
        if (error){ 
        	callback(error); 
        }else{
         callback(null);
       } 
    }); 

};





// exports.insert = function(db, doc, callback) {
//   // TODO: implement
//   callback(null);
// };

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) { 
	db.collection('movies').find({'director':director}).sort({'title':1}).toArray(function(error,docs){
        if (error){ 
        	console.log(error); } 
       else{ 
       	callback(null, docs); 
       } 
   }); 
};

// exports.byDirector = function(db, director, callback) {
//   // TODO: implement
//   callback(null, []);
// };

// Please download attachments for this homework here

// For this section's assessment, you will fill out the functions defined in interface.js. 
// These functions will query a collection of movies - the data in the movies collection will look like what you see in the movies.json file.

// In order to complete this section's assessment, you will have to make the tests in test.js pass. 
// To run the tests, run npm install and then npm test. You will notice the tests fail.
//  In keeping with this section's emphasis on automation, we recommend you use npm run watch to re-run your tests every time you change the interface.js file.
//   Once the tests succeed, npm run watch will terminate and print a "secret code" consisting of a short phrase. 
//   Copy this code into the assessment page in your browser to complete this assessment.