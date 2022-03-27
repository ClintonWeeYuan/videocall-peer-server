const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000
app.get('/', (req, res, next) => res.send('Hello world!'));

// =======

const server = app.listen(PORT, () => {console.log(`Server listening on ${PORT}`)});

const peerServer = ExpressPeerServer(server, {
    path: '/myapp'
});

app.use('/peerjs', peerServer);