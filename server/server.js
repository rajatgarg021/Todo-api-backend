require("./config/config.js");

var _ = require("lodash");
var express = require("express");
var bodyparser = require("body-parser");
const { ObjectID } = require("mongodb");

var mongoose = require("./db/mongoose").mongoose;
var Todo = require("./models/Todo").Todo;
var User = require("./models/User").user;

var app = express();
app.use(bodyparser.json());

var port  =  process.env.PORT;

app.post("/todos", (req,res)=>{
    
    var todo = new Todo({
        text: req.body.text
        
    })
   
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
})

app.get("/todos", (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos
        });
    }, (err)=>{
        res.status(400).send(err);
    })
})

app.get("/todos/:id", (req, res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })


})

app.delete("/todos/:id", (req, res)=>{
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }  
    Todo.findByIdAndRemove(id).then((result)=>{
        if(!result){
           return res.status(404).send();
        }
        res.status(200).send(result);
    }).catch((e)=>{
        res.status(400).send();
    })
})

app.patch("/todos/:id", (req, res)=>{
    var id = req.params.id;
    console.log(id);
    var body = _.pick(req.body, ["text", "completed"]);
    console.log(body)
    if(!ObjectID.isValid(id)){
        return res.status(404).send();

    }


    if(_.isBoolean(body.completed) && body.completed ){
        body.completedAt = new Date().getTime();
    }
    else{

        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new : true}).then((todo)=>{
        if(!todo){
           return res.status(400).send();

        }
        res.send({todo});
    }).catch((e)=>{

        res.status(404).send();
            })
});




app.listen(port, ()=>{
    console.log("server has started on port 3000");
});

module.exports = {app};




