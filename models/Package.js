const mongoose = require('mongoose');


const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    description: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: true
    }, 
    servicesIncluded: [String]
    
}, { timestamps: true});

 const Package = mongoose.model('Package', packageSchema);

 module.exports = Package;