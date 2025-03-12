const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Urdu Tutor Route
app.get('/api/urdu-tutor', (req, res) => {
    res.json({ message: "Welcome to the AI Urdu Tutor!" });
});

// Developer Panel Route
app.get('/api/developer', (req, res) => {
    res.json({ message: "Developer mode activated!" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});