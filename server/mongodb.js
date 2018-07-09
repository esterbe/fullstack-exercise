var MongoClient = require('mongodb').MongoClient;

//Connect to the db
MongoClient.connect('mongodb://localhost', function (err, client) {
    if(!err) {
        console.log("We are connected");
    }
    else
        throw err;

    var db = client.db('fullstackexercise');
    var collection = db.collection('comments');
    collection.find({}).toArray(function(err, items) { //foreach
        console.log(items);
    });;
});