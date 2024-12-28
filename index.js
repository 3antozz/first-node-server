const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                return displayError(res)
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if (req.url === '/about' || req.url === '/contact-me') {
        const fileName = `./${req.url}.html`;
        fs.readFile(fileName, (err, data) => {
            if (err) {
                return displayError(res);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        return displayError(res);
    }
}).listen(8080);


function displayError (res) {
    fs.readFile('./404.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 NOT FOUND!')
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}