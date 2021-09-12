const mongoose = require('mongoose');

const task = new mongoose.Schema({
    sortDate: Number,
    task: String,
    day: String,
})

module.exports = mongoose.model("Task", task);