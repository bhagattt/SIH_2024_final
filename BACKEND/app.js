const express = require('express');
const cors = require('cors');
const connectDb = require('./databases/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
