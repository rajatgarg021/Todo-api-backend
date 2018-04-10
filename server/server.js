var express = require("express");
var bodyparser = require("body-parser");

var mongoose = require("./db/mongoose").mongoose;
var Todo = require("./models/Todo").Todo;
var User = require("./models/Users").user;

var app = express();
app.use(bodyparser.json());

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

app.listen(3000, ()=>{
    console.log("server has started on port 3000");
});

module.exports = {app};




