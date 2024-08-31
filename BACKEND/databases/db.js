const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aryangg:Aryan@2024@sihcluster.kumcg.mongodb.net/auth?retryWrites=true&w=majority&appName=SIHCLUSTER', {
      useNewUrlParser: true,  
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
