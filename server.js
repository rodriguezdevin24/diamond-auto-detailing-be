//server.js

const express = require('express');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const app = express();

require ('./db/connection')

const PORT = process.env.port || 3200;

app.use(express.json()); //Middleware for parsing JSON bodies
app.use('/users', userRoute);
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.send('Port is up and running!');
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})