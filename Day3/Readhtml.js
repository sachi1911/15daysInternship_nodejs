var fs=require('fs');
var http = require('http');

http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);
console.log('Server started');