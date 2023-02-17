
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/assets', express.static(process.cwd() + '/assets'));

app.get('/', (req,res) => {
    return res.sendFile(process.cwd() + '/views/index.html');
});

app.use( function (req,res,next) {
    res.status(404)
    .type('text')
    .send("404 - Requested Asset Not Found");
});

const server = http.listen(3000, () => {
    console.log ("App is listening on port 3000:");
});