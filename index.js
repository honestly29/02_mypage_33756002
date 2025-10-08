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
                <h1 style="color: blue">Roan Jones</h1>
                <h2>Computer Science student at Goldsmiths, UOL</h2>
                <p>Hi, nice to meet you! My name is Roan and I study Computer Science at Goldsmiths University. My main interest is in AI and Machine Learning.<p>
            </body>
        </html>
        `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
