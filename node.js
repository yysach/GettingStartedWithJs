// Module
var logger= require('./logger')
let time=0;
var timer =setInterval(function(){
    time+=2;
    console.log("hello after "+time+" second")
    if(time > 5)
    clearInterval(timer)
},2000);

console.log("hello this is sachin yadav")
console.log(__dirname,__filename);

console.log(logger.endPoint)
console.log(logger.log("hello logger"));


// events
var events = require('events');
var myEmitter = new events.EventEmitter();  // use new keyword must

myEmitter.on('clickevent',function(messg){  // handler
    console.log(messg);
});

myEmitter.emit('clickevent','I m Sachin');  // trigger


// File system
var fs = require('fs');
console.log(fs.readFileSync('file.txt','utf8'))

fs.readFile('file.txt','utf8',function(err,data){
    console.log(data)
});

fs.mkdir('stuff',function(){
    fs.readFile('file.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writefile.txt',data,function(){});
    })
})