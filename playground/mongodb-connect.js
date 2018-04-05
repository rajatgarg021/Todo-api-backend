    const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
       return console.log("unable to connect to mongo db server");
    }
    console.log("connected to mongo db server");

    // db.collection("Todos").insertOne({
    //     text: "something to do",
    //     completed: true
    // }, (err, results)=>{
    //     if(err){
    //        return console.log("unable to insert todo");
        
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // })    
    // db.close();
   
    db.collection("Users").insertOne({
        name: "raat garg",
        age: 20,
        location: "hostel j thapar university"
    }, (err, results)=>{
        if(err){
           return  console.log("unable to insert Todo");
        }
        console.log(JSON.stringify(results.ops, undefined, 2));
    })
    db.close();

});
