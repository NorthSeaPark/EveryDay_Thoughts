var http = require("http")
// 我们可以在传递参数的地方直接定义函数
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Fight to the end");
    response.end();
}).listen(8888);
