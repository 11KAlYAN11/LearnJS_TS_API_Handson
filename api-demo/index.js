const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage
const users = [];
const data = [];
let name = null;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the API demo!');
});

// User GET endpoint
app.get('/user', (req, res) => {
    res.json(users);
});

// User POST endpoint
app.post('/user', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    users.push({ name, age });
    res.status(201).json({ message: 'User added successfully', user: { name, age } });
});

// Name GET endpoint
app.get('/name', (req, res) => {
    if (!name) {
        return res.status(404).json({ error: 'No name set' });
    }
    res.json({ name });
});

// Name POST endpoint
app.post('/name', (req, res) => {
    const { name: newName } = req.body;

    if (!newName) {
        return res.status(400).json({ error: 'Name is required' });
    }

    name = newName;
    res.status(201).json({ message: `Name set to ${name}` });
});

// Data GET endpoint
app.get('/data', (req, res) => {
    res.json(data);
});

// Data POST endpoint
app.post('/data', (req, res) => {
    const { key, description } = req.body;

    if (!key || !description) {
        return res.status(400).json({ error: 'Key and description are required' });
    }

    data.push({ key, description });
    res.status(201).json({ message: 'Data added successfully', data: { key, description } });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
