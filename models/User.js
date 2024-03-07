//User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required' ],
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        unique: true, 
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: { 
        type: String, 
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        enum: ['admin', 'regular'],
        default: 'regular'
    },
    refreshToken: {
        type: String,
        default: ""
    },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})


const User = mongoose.model('User', userSchema);
module.exports = User;
