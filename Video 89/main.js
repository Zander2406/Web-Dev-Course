const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/blog', blog);
app.use('/shop', shop);

// app.get('/', (req, res) => {
//     console.log("Hey it's a GET request");
//     res.send('Hello World!')
// })


// app.post('/', (req, res) => {
//     console.log("Hey it's a POST request");
//     res.send('Hello World Post!')
// })


// app.put('/', (req, res) => {
//     console.log("Hey it's a PUT request");
//     res.send('Hello World Put!')
// })

app.get('/', (req, res) => {
    console.log("Hey it's a GET request");
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("Hey it's a POST request");
    res.send('Hello World Post!')
}).put('/', (req, res) => {
    console.log("Hey it's a PUT request");
    res.send('Hello World Put!')
})

app.get('/index', (req, res) => {
    console.log("Index Page");
    res.sendFile('templates/index.html', { root: __dirname });
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ['harry', 'jerry'] });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
