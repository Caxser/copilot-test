// Create web server
// 1. Create web server
// 2. Create a route for the main page
// 3. Create a route for the comments page
// 4. Create a route for the comments form
// 5. Create a route for the comments data

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for the main page
app.get('/', function(req, res) {
    res.send('Welcome to my comments app');
});

// 3. Create a route for the comments page
app.get('/comments', function(req, res) {
    res.send('Welcome to the comments page');
});

// 4. Create a route for the comments form
app.get('/comments/new', function(req, res) {
    res.send('Welcome to the comments form page');
});

// 5. Create a route for the comments data
app.post('/comments', function(req, res) {
    res.send('You have submitted your comment');
});

// Start the server
app.listen(port, function() {
    console.log('Server is running on port', port);
});