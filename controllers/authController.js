const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials'});
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h'} //token expires in 2 hours
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

