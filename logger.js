// creating  module
// in js each js file act as a module

var url="https://amazon.com";

function log(message){
    console.log(message);
}

module.exports.log=log;
module.exports.endPoint=url;
// both are avaliable where we use require('logger')
/*
another way of doing that is

module.exports = {
    log:log,
    endPoint:url
}
*/