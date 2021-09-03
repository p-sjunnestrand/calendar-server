require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded())

mongoose.connect(process.env.DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("database online!");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.post('/')

app.listen(port, () => {
    console.log("Server running on port " + port);
})