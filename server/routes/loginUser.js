const express = require('express');
const router = express.Router();
const argan2 = require('argon2');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleware');

//@router get api/auth
//@desc check if user is logged in
//@access Public
router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user)
            return res.status(400).json({ success: false, message: ' user not found' })
        res.json({ success: true, user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'internal server error' })
    }
})


//@router POST api/auth/login
//@desc login user
//@access public

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    //simple validation
    if (!username || !password)
        return res.status(400).json({ success: false, message: 'missing username and password' });
    try {
        //check for existing user
        const user = await User.findOne({ username })
        if (!user)
            return res.status(400).json({ success: false, message: 'Incorrect username and password' });
        //user name found
        const passwordValid = await argan2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({ success: false, message: 'Incorrect username and password' })
        //return token
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN)

        res.json({ success: true, message: 'user logged in successfully!!!', accessToken })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'internal server error' })
    }
})

module.exports = router