const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['parent', 'student', 'mentor', 'counsellor'], required: true },
    profileData: { type: mongoose.Schema.Types.Mixed },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
