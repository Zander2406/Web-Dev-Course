const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/about', (req, res) => {
    res.send('About us');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact me');
});

app.get('/blog', (req, res) => {
    res.send('Hello blog!');
});

app.get('/blog/:slug', (req, res) => {
    // Logic to fetch slug from db
    // For URL: http://localhost:3000/blog/intro-to-python?mode=dark&region=in
    console.log(req.params); // will output {slug: 'intro-to-python'}
    console.log(req.query); // will output {mode: dark and region: in}
    res.send(`Hello ${req.params.slug}`);
});

// app.get('/blog/intro-to-js', (req, res) => {
//     // Logic to fetch intro to js from the DB
//     res.send('Hello intro to js!');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//     // Logic to fetch intro to python from the DB
//     res.send('Hello intro to python!');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});