var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    console.log("request made from"+req.url)
    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream = fs.createReadStream(__dirname+'/file.txt','utf8')
    readStream.pipe(res);
    //res.end('<h1>hello create server on 3000<h1>');
});

server.listen(3001,'localhost');
console.log("hello from console log");