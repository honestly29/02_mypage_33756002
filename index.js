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
                <h1 style="color: blue">Hello World!</h1>
                <h2>About me:</h2>
                <p>Hi, nice to meet you! My name is Roan and I am a student at Goldsmiths, University of London.<p>
            </body>
        </html>
        `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
