var http=require("http");
http.createServer(function(request,response)
{
    response.end('HELLO WORLD in nodejs\n');

}).listen(3000);
console.log('Server running at port no. 3000');