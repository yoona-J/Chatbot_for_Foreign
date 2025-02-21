const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

//=================================
//             User
//=================================

router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.status(200).json({ success: true }))
        .catch(err => res.status(400).json({ success: false, err }));
});

module.exports = router;