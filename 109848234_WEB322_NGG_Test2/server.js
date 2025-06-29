const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Accessing images and stylesheet from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route work.html
app.get('/school', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'school.html'));
});

// Get server running
app.listen(PORT, () => {
    console.log(`Local Host: http://localhost:${PORT}`);
});
