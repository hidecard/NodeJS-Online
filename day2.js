// function add(a,b){
//     return a + b;
// }
// function min(a,b){
//     return a - b;
// }

// module.exports = {add , min};

const http = require('http');

http.createServer(function(req , res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('Hello Node JS');
    res.end();
}).listen(8080);