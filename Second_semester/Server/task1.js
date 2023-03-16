const http = require('http');
const host = 'localhost';
const port = 8000;
const server = http.createServer(
    function (req, res){
        res.writeHead(200,{
         'Content-Type':'text/plain'
        });
         res.end(`"Poppy," he breathed, kissing my cheek, the space below my ear, and then my shoulder. 
         He pressed his mouth to the side of my neck. 
         "My beautiful, brave Queen. I could stay here, holding you, forever."
         Oh, gods, I knew this was ending. Panic exploded. I wasn't ready. I wasn't. 
         "Don't leave me. Don't leave us. I love you. Please. I love..",
         "Find me again." His head lifted, and his eyes... they were no longer bright, his features no longer clear. 
         Things were hazy, and I couldn't... , oh, gods, I couldn't feel him. 
         "Find me. I'll be waiting here. Always.`)
    });


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});