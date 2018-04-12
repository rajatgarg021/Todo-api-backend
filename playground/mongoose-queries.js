const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/Todo");
const {User} = require("./../server/models/User");


// var id = "5ace1c571c542c2e04dbf8dd";
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log("todos: ", todos);
// });

var id ="5ace2223a2fb0f04a895c4f6";
User.findById(id).then((doc)=>{
    if(!doc){
       return console.log("user not found");
    }
    console.log(doc);
}, (e)=>{
    console.log("unable to find user")
})












//lavish kaa method to inssert a user or a todo



// const newUser = new User({
//     email: 'lavisht22@gmail.com',
// });

// newUser.save(function(saveError, savedUser){
//     console.log(savedUser);
// })


// const newTodo = new Todo({
//     text: 'Do something',
// });

// newTodo.save(function(saveError, savedDocument) {
//     console.log(savedDocument);
// })