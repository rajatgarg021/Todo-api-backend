const { MongoClient } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log("unable to connect to mongo db server");
    }
    console.log("connected to mongo db server");


    db.collection("Users").find({name: "rajat garg"}).toArray().then((docs)=>{
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log("unable to fetc todos");
    })


    db.close();

});
