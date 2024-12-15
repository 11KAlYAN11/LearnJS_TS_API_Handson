const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Function to log database queries
function logQuery(query, params) {
    console.log(`SQL Query: ${query}`);
    console.log(`Parameters: ${JSON.stringify(params)}`);
}

// --- CRUD for User ---
app.get('/user', (req, res) => {
    const query = `SELECT * FROM users`;
    logQuery(query, []);
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to fetch users.' });
        }
        res.json(rows);
    });
});

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    const query = `INSERT INTO users (name, age) VALUES (?, ?)`;
    logQuery(query, [name, age]);
    db.run(query, [name, age], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to create user.' });
        }
        console.log(`User created with ID: ${this.lastID}`);
        res.json({ id: this.lastID, name, age });
    });
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    const query = `UPDATE users SET name = ?, age = ? WHERE id = ?`;
    logQuery(query, [name, age, id]);
    db.run(query, [name, age, id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to update user.' });
        }
        console.log(`Rows affected (PUT /user/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.json({ message: 'User updated successfully!' });
    });
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM users WHERE id = ?`;
    logQuery(query, [id]);
    db.run(query, [id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to delete user.' });
        }
        console.log(`Rows affected (DELETE /user/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.json({ message: 'User deleted successfully!' });
    });
});

// --- CRUD for Name ---
app.get('/name', (req, res) => {
    const query = `SELECT * FROM names`;
    logQuery(query, []);
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to fetch names.' });
        }
        res.json(rows);
    });
});

app.post('/name', (req, res) => {
    const { name } = req.body;
    const query = `INSERT INTO names (name) VALUES (?)`;
    logQuery(query, [name]);
    db.run(query, [name], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to create name.' });
        }
        console.log(`Name created with ID: ${this.lastID}`);
        res.json({ id: this.lastID, name });
    });
});

app.put('/name/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const query = `UPDATE names SET name = ? WHERE id = ?`;
    logQuery(query, [name, id]);
    db.run(query, [name, id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to update name.' });
        }
        console.log(`Rows affected (PUT /name/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Name not found.' });
        }
        res.json({ message: 'Name updated successfully!' });
    });
});

app.delete('/name/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM names WHERE id = ?`;
    logQuery(query, [id]);
    db.run(query, [id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to delete name.' });
        }
        console.log(`Rows affected (DELETE /name/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Name not found.' });
        }
        res.json({ message: 'Name deleted successfully!' });
    });
});

// --- CRUD for Data ---
app.get('/data', (req, res) => {
    const query = `SELECT * FROM data`;
    logQuery(query, []);
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to fetch data.' });
        }
        res.json(rows);
    });
});

app.post('/data', (req, res) => {
    const { value } = req.body;
    const query = `INSERT INTO data (value) VALUES (?)`;
    logQuery(query, [value]);
    db.run(query, [value], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to create data.' });
        }
        console.log(`Data created with ID: ${this.lastID}`);
        res.json({ id: this.lastID, value });
    });
});

app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const { value } = req.body;
    const query = `UPDATE data SET value = ? WHERE id = ?`;
    logQuery(query, [value, id]);
    db.run(query, [value, id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to update data.' });
        }
        console.log(`Rows affected (PUT /data/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Data not found.' });
        }
        res.json({ message: 'Data updated successfully!' });
    });
});

app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM data WHERE id = ?`;
    logQuery(query, [id]);
    db.run(query, [id], function (err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ error: 'Failed to delete data.' });
        }
        console.log(`Rows affected (DELETE /data/${id}): ${this.changes}`);
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Data not found.' });
        }
        res.json({ message: 'Data deleted successfully!' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



//**************** Below code for GET, POST, PUT, DELETE **********************

/*const express = require('express');
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
// User POST endpoint
app.post('/user', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    users.push({ name, age });
    res.status(201).json({ message: 'User added successfully', user: { name, age } });
});

// GET and POST for /name
app.get('/name', (req, res) => {
    res.json(names);
});

// Name POST endpoint
app.post('/name', (req, res) => {
    const { name: newName } = req.body;
    console.log('Received name:', newName);

    // Validate the presence of the 'name' field
    if (!newName) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Add the new name to the global 'names' array
    names.push(newName);
    console.log('Updated names array:', names);

    res.status(201).json({ message: `Name "${newName}" added successfully!`, names });
});

// GET and POST for /data
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

// PUT for updating user data by ID
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= users.length) {
        return res.status(404).json({ error: 'User not found!' });
    }
    if (!req.body || !req.body.name || !req.body.age) {
        return res.status(400).json({ error: 'Invalid user data!' });
    }
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.json({ message: 'User updated successfully!', updatedUser });
});

app.put('/name/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= names.length) {
        return res.status(404).json({ error: 'Name not found!' });
    }
    if (!req.body || !req.body.name) {
        return res.status(400).json({ error: 'Invalid name data!' });
    }
    const updatedName = req.body;
    names[id] = updatedName;
    res.json({ message: 'Name updated successfully!', updatedName });
});

app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= data.length) {
        return res.status(404).json({ error: 'Data not found!' });
    }
    if (!req.body || !req.body.key || !req.body.description) {
        return res.status(400).json({ error: 'Invalid data object!' });
    }
    const updatedData = req.body;
    data[id] = updatedData;
    res.json({ message: 'Data updated successfully!', updatedData });
});

// DELETE for removing user by ID
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= users.length) {
        return res.status(404).json({ error: 'User not found!' });
    }
    users.splice(id, 1);
    res.json({ message: 'User deleted successfully!' });
});

app.delete('/name/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= names.length) {
        return res.status(404).json({ error: 'Name not found!' });
    }
    names.splice(id, 1);
    res.json({ message: 'Name deleted successfully!' });
});

app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= data.length) {
        return res.status(404).json({ error: 'Data not found!' });
    }
    data.splice(id, 1);
    res.json({ message: 'Data deleted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/





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