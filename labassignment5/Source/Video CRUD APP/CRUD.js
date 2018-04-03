

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://parasravya:123456@@ds117489.mlab.com:17489/sravya_db';
var findUser = function(db, callback) {
    var cursor =db.collection('videoDetails').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};

//search record
var findVideoDetails = function(db,callback) {
    var cursor = db.collection('ase_lab').find({"title":"Funny Puppies And Cute Puppy Videos Compilation 2016 [BEST OF]"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("Title:" + doc.title);
            console.log("Description:" + doc.description);
        }
    });
}

//delete record

var deleteVideoDetails = function(db,callback) {
    var cursor = db.collection('ase_lab').deleteOne({"title":"Funny"});

};

//update Record
var updateVideoDetails = function(db,callback) {
    var cursor2 = db.collection('ase_lab').updateOne({"title": "Cute Kittens And Funny Kitten Videos Compilation 2016"}, {'$set': {"title": "love cats"}},
        function (err, result) {
            if (err)
                throw err;
            else
                res.send("Update success !");
        });
}

MongoClient.connect(url, function(err, db) {ss
    assert.equal(null, err);
    findVideoDetails (db, function() {
        db.close();
    });
    deleteVideoDetails (db, function() {
        db.close();
        updateVideoDetails(db, function() {
            db.close();
        });
    });
}