
var app = require('express')();
var server = app.listen(5000, function() {
    console.log('server started');
});
var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});
io.on('connection', function (socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});
