const mongoose = require('mongoose');

const task = new mongoose.Schema({
    task: String,
    date: mongoose.Schema.Types.Mixed,
})

module.exports = mongoose.model("Task", task);