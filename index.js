var http = require("http");
const port = 8000;

// Initialise web server
http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>MyPage</title>
            </head>
            <body>
                <h1>Hello World!</h1>
                <p>Hi, nice to meet you<p>
            </body>
        </html>
        `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});