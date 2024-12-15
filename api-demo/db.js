const sqlite3 = require('sqlite3').verbose();

// Create or connect to the database
const db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create tables
db.serialize(() => {
    // Create 'users' table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER
        )
    `);

    // Create 'names' table
    db.run(`
        CREATE TABLE IF NOT EXISTS names (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `);

    // Create 'data' table
    db.run(`
        CREATE TABLE IF NOT EXISTS data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            value TEXT NOT NULL
        )
    `);

    console.log('Tables created (if not already existing).');
});

module.exports = db;
