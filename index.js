const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


const data = require('./data.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('portfolio Loading');
});

app.get('/projects', (req, res) => {
    res.send(data);
})

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    const projects = data.find(project => project.id === id);
    res.send(projects);
});

app.listen(port, () => {
    console.log('portfolio listening on port', port);
})