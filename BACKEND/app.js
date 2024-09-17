const express = require('express');
const cors = require('cors');
const connectDb = require('./databases/db');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3001'
}));

connectDb();

const authRoutes = require('./routes/auth');
app.use('/authform', authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
