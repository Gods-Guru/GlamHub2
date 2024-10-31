const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Using schema and model
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String, // Consider hashing passwords in production
});

const User = mongoose.model('User', userSchema);

// SignUp Route
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).send({ message: 'Email already registered.' });
    }
});

// Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.send({ message: 'Login successful!', userEmail: email });
    } else {
        res.status(401).send({ message: 'Invalid email or password.' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
