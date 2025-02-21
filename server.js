const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware: Log each request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files (HTML, CSS, JS) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>🚀 Jenkins Auto-Deployment Successful!</h1><p>Try visiting <a href="/greet/Ravi">/greet/YourName</a></p>');
});

// Dynamic Greeting Route
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}! 👋</h1><p>Your Jenkins pipeline is working perfectly!</p>`);
});

// 404 Error Handling
app.use((req, res) => {
    res.status(404).send('<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>');
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server running at: http://localhost:${port}`);
});

