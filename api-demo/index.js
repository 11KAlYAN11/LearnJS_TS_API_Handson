const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the API demo!');
});

// User GET endpoint
app.get('/user', (req, res) => {
    res.json({ name: 'Alice', age: 25 });
});

// Data GET endpoint
app.get('/data', (req, res) => {
    res.json({ key: 'value', description: 'This is some sample data.' });
});

// Name GET endpoint
app.get('/name', (req, res) => {
    res.send('This is the /name endpoint.');
});

// Handle POST request to /user
app.post('/user', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    res.status(201).json({ message: `User ${name} added with age ${age}` });
});

// Name POST endpoint
app.post('/name', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    res.status(201).json({ message: `Hello, ${name}! Your name was successfully received.` });
});

// Data POST endpoint
app.post('/data', (req, res) => {
    const { key, description } = req.body;

    if (!key || !description) {
        return res.status(400).json({ error: 'Key and description are required' });
    }

    res.status(201).json({ message: 'Data received successfully', data: { key, description } });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
