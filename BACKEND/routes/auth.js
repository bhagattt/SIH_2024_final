const express=require('express');
const bcrypt=require('bcrypt');
const User=require('../models/users');
const router=express.Router();

router.post('/signup', async function(req,res){
    const { name, email,username, password,role } = req.body;
    if(!['parent','student','mentor','counsellor'].includes(roles))
    {
        res.render.status(400).json({message:'Invalid role'});
    }

const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Email or Username already in use' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, username, password: hashedPassword, role });
  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });


})