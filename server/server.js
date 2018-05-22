// Require express to source
const express = require('express');

// set app to use express
const app = express();

// set app to use the static method of express to scope client access to the public folder
app.use( express.static('server/public'));

// set the port
const port = 5000;

// set the app to listen to the port
app.listen(port, function(){
    console.log(`Listening to port ${port}`);
});