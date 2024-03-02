//server.js

const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute')
const app = express();

require ('./db/connection')

const PORT = process.env.port || 3200;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Testing Port!');
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})