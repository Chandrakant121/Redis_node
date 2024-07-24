const mongoose = require('mongoose')

const todoSchem = new mongoose.Schema({
    name: { type: String, required: true },          // name
    whenToComplete: { type: Date, required: true },  // time 8 pm
    isCompleted: { type: Boolean, required: false, default: false }   // true or false
}, {
    versionKey: false,
    timestamps: true
})

const Todo = mongoose.model('todo', todoSchem)
module.exports = Todo