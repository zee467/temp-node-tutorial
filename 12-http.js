const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }

    if (req.url === '/about') {
        res.end('Here is our short story.');
    }
    else if (req.url === '/contact') {
        res.end('You can have my contact.');
    }
    else {
        res.end(
            `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
        `);
    }
})

// port our server is listening to 
server.listen(3000);