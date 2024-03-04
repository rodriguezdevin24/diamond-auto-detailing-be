//server.js
const express = require('express');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const packageRoute = require('./routes/packageRoute')

const testRoute = require('./routes/testRoute')
const app = express();

require ('./db/connection')

const PORT = process.env.port || 3200;

app.use(express.json()); //Middleware for parsing JSON bodies
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/packages', packageRoute);
app.use('/test', testRoute);

app.get('/', (req, res) => {
    res.send('Port is up and running!');
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})