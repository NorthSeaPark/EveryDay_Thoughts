// var http = require("http")
// 我们可以在传递参数的地方直接定义函数
// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Fight to the end");
//     response.end();
// }).listen(8888);

// 我们创建了服务器，并且向创建它的方法传递了一个函数。
// 无论何时我们的服务器收到一个请求，这个函数就会被调用。

// 所以我们的代码就是：当收到请求时，使用 response.writeHead() 
// 函数发送一个HTTP状态200和HTTP头的内容类型（content-type），使用 response.write() 函数
// 在HTTP相应主体中发送文本“Hello World"。


// 我们把我们的服务器脚本放到一个叫做 start 的函数里

// var http = require("http")

// function start(){
//     function onRequest(request, response){
//         console.log("Request received!");
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("We'll die in the class we born");
//         response.end();
//     }
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

// exports.start = start;


// 我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数


//                             url.parse(string).query
//                                            |
//           url.parse(string).pathname       |
//                         |                  |
//                         |                  |
//                      ------ -------------------
// http://localhost:8888/start?foo=bar&hello=world
//                                 ---       -----
//                                  |          |
//                                  |          |
//               querystring(string)["foo"]    |
//                                             |
//                         querystring(string)["hello"]


function start(){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("We'll die in the class we born");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

