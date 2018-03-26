const express = require('express');
const app = express();
const path = require('path');
const PORT = 1311;

const publicPath = path.join(__dirname, '..', 'public');


// middleware - something that runs between UI and DB
app.use( express.static( publicPath ) );

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});