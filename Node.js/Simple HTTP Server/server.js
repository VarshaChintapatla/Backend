
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to my Node.js Server!');
    }

    else if (req.url === '/about') {
        res.end('This is my About Page');
    }

    else if (req.url === '/contact') {
        res.end('Contact Us Page');
    }

    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running');
});
