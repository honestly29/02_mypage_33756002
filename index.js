
const http = require("http");
const fs = require("fs");
const path = require("path")

const port = 8000;

// Initialise web server
http.createServer(function(req, res) {
    // set file path to html file
    const filePath = path.join(__dirname, "public/index.html");

    // read html file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Error loading HTML file.")
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
