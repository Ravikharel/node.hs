const express = require('express');
const app = express();
const port = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send(`
        <h1>Jenkins Deployed This App 🚀</h1>
        <p>Welcome! Try visiting <a href="/hello/Ravi">/hello/YourName</a></p>
    `);
});

// Dynamic Route
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}! 👋</h1><p>Jenkins has deployed this successfully.</p>`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

