const dotenv = require('dotenv');
const path = require ('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');   
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
})

mongoose.connection.on('error', (err) => {
    console.log(`error connecting with mongoose: ${err}`);
});



