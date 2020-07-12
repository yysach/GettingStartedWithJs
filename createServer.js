var http = require('http')
var fs = require('fs')

fs.readFile('./template/index.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

fs.readFile('./template/style.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});
var server = http.createServer(function(req,res){
    console.log("request made from"+req.url)
    console.log('request method '+req.method)
    switch (req.url) {
        case "/style.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            fs.createReadStream(__dirname+'/template/style.css','utf8').pipe(res)
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname+'/template/index.html','utf8').pipe(res)
    }
});

server.listen(3001,'localhost');
console.log("hello from console log");