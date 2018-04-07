var mongoose = require("mongoose");
var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        defalut: null
    }
});

module.exports = {Todo}