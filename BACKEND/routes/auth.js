const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const router = express.Router();

router.post('/signup', async function (req, res) {
    const { name, email, username, password, role } = req.body;

    if (!['parent', 'student', 'mentor', 'counsellor'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or Username already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, username, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
router.post('/login',async function(req,res)
{
  const {email,password}=req.body;
  try{
    let user=await User.findOne({email});
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)
    {
      return res.status(400).json({msg:"Password didnt match"})
    }
    res.status(200).json({msg:"Logged in successfully"});
    
  
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
