const http = require('http');
const data = require('./data');
const server = http.createServer((req, res) => {
    res.write(`<!DOCTYPE html>
        <html>
        <head>
        <title>${data.title}</title>
        </head>
        <body>
        <h1>${data.subtitle}<h1>
        <p>${data.depcription}<p>
        </body>
        </html>`);
    res.end();        
});
const PORT = 3000;
server.listen(PORT, () => {console.log(`servidor escuchando en el puerto ${PORT}`);
});

