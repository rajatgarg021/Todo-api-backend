const { MongoClient } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log("unable to connect to mongo db server");
    }
    console.log("connected to mongo db server");


    //deleteMany
    // db.collection('Users').deleteMany({name: "rajat garg"}).then((results)=>{
    //     console.log(results);
    // });

    
    //deleteOne
    // db.collection("Users").deleteOne({name: "booby"}).then((results)=>{
    //     console.log(results);
    // })


    //findOneAndDelete
    db.collection("Users").findOneAndDelete({name:"booby"}).then((results)=>{
        console.log(results);
    })
    
    
    
    
    
    
    
    db.close();

});
