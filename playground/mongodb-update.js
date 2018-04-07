const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log("unable to connect to mongo db server");
    }
    console.log("connected to mongo db server");


    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5ac61f8d0aef3ddc62bc5273")
    }, {
        $set: {
            name: "rajat garg",
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results)=>{
        console.log(results);
    })





    db.close();

});
