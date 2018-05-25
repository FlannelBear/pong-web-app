const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

const port = 5000;

app.listen(port, () => console.log(`Server up on port ${port}.`));

app.get('/pong', (req, res) => {
    console.log('Handling GET for /pong route');
    // handle response here
    res.send('meow');
});

app.post('/pong', (req, res) => {
    console.log('Handling POST for /pong route'. req.body);
    // handle req.body here
    res.send('ribbet');
});