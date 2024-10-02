// vulnerable.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Vulnerable endpoint that reflects user input
app.get('/greet', (req, res) => {
    const name = req.query.name; // Vulnerable to XSS
    res.send(`<h1>Hello, ${name}!</h1>`);
});

// Vulnerable endpoint that simulates a database query
app.post('/submit', (req, res) => {
    const userInput = req.body.input; // Vulnerable to SQL Injection
    // Simulated database query (not real)
    const query = `SELECT * FROM users WHERE name = '${userInput}'`; // Vulnerable to SQL Injection
    console.log(`Executing query: ${query}`);
    res.send('Query executed');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
