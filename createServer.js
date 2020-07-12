var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    console.log("request made from"+req.url)
    console.log('request method '+req.method)
    res.writeHead(200,{'Content-Type':'text/html'});
    var readHTMLStream = fs.createReadStream(__dirname+'/template/index.html','utf8')
    readHTMLStream.pipe(res);
    
  

    //res.end('<h1>hello create server on 3000<h1>');
});

server.listen(3001,'localhost');
console.log("hello from console log");