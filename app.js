require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./Task');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://petterAdmin:gtnafyHN8WpQWfRB@rootcluster.d4txc.mongodb.net/rootCluster?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("database online!");
})

app.get('/:date', (req, res) => {
    try{
        Task.find({sortDate: req.params.date}, (err, docs) => {
            if(err) throw err;
            console.log(docs);
            res.json(docs);
        })
    } catch(err) {
        console.log(err);
    }
})

app.post('/:date', async (req, res) => {
    console.log(req.body);
    const newTask = new Task({
        sortDate: req.params.date,
        task: req.body.task,
        day: req.body.day
    });
    await newTask.save().then(doc => {
        console.log("new task: ", doc);
        console.log("200");
        res.status(200).json(doc);
    })
})

app.delete('/:id', (req, res) => {
    try{
        Task.deleteOne({_id: req.params.id}, (err, doc) => {
            if(err) throw err;
            console.log(doc)
            res.status(200).json({id: req.params.id});
        })
    } catch(err) {
        console.log(err)
    }
})


app.listen(port, () => {
    console.log("Server running on port " + port);
})