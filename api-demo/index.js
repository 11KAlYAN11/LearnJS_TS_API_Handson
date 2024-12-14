

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for demonstration
let users = [];
let names = [];
let data = [];

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the API demo!');
});

// GET and POST for /user
app.get('/user', (req, res) => {
    res.json(users);
});
app.post('/user', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: 'User added successfully!', newUser });
});

// GET and POST for /name
app.get('/name', (req, res) => {
    res.json(names);
});
app.post('/name', (req, res) => {
    const newName = req.body;
    names.push(newName);
    res.status(201).json({ message: 'Name added successfully!', newName });
});

// GET and POST for /data
app.get('/data', (req, res) => {
    res.json(data);
});
app.post('/data', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).json({ message: 'Data added successfully!', newData });
});

// PUT for updating data by ID (assuming items have an id property)
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.json({ message: 'User updated successfully!', updatedUser });
});
app.put('/name/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedName = req.body;
    names[id] = updatedName;
    res.json({ message: 'Name updated successfully!', updatedName });
});
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    data[id] = updatedData;
    res.json({ message: 'Data updated successfully!', updatedData });
});

// DELETE for removing data by ID
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1);
    res.json({ message: 'User deleted successfully!' });
});
app.delete('/name/:id', (req, res) => {
    const id = parseInt(req.params.id);
    names.splice(id, 1);
    res.json({ message: 'Name deleted successfully!' });
});
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data.splice(id, 1);
    res.json({ message: 'Data deleted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





// --------------------Below code for upto PUT & GET ----------------------------

/*const express = require('express');
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
*/