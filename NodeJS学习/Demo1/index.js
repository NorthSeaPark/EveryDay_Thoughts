// 请求server模块并且把它指向变量
var server = require("./server")
var router = require("./router")

server.start(router.route)