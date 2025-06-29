const express = require('express');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home_page.html'));
});

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'details.html'));
});



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
