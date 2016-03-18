var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    crypto = require('crypto'),
    MongoClient = require('mongodb').MongoClient;
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/m101', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res){

        var algorithm = 'aes256';
        var encrypted_message = 'f36731a12e6130f0ed0bccbfd9bd6ebd';

        db.collection('hw1_3').find({}).toArray(function(err, docs) {
            if(err) throw err;

            if (!docs) {
                console.dir("No documents found");
                return db.close();
            }

	    var doc = docs[0];
            var decipher = crypto.createDecipher(algorithm, doc['_id']);
            var decrypted = decipher.update(encrypted_message, 'hex', 'utf8') + decipher.final('utf8');
            return res.render('hello', { "name" : decrypted });
        });
    });

    app.use(function(req, res){
        res.sendStatus(404);
    });

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });
});
