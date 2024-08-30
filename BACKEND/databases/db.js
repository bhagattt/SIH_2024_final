const mongoose=require('mongoose');

require('dotenv').config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aryangg:Aryan%402024@cluster0.dhqj2.mongodb.net/library?retryWrites=true&w=majority', {
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