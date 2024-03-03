const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Adjust path as needed

// Test protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "You have accessed a protected route! :)" });
});

module.exports = router;
