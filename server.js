//server.js

const express = require('express');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const appointmentRoute = require('./routes/appointmentRoute')
const packageRoute = require('./routes/packageRoute');
const testRoute = require('./routes/testRoute');
const timeSlotRoute = require('./routes/timeSlotRoute')
const app = express();

require ('./db/connection')

const PORT = process.env.port || 3200;

app.use(express.json()); //Middleware for parsing JSON bodies
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/packages', packageRoute);
app.use('/api/appointments', appointmentRoute);
app.use('/test', testRoute);
app.use('/api/timeslots', timeSlotRoute);

app.get('/', (req, res) => {
    res.send('Port is up and running!');
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})