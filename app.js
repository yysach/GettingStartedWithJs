
function sayHello(){
    console.log("hello sachin including require logger.js file")

}
sayHello()


var message='sachin';
console.log(global.message)
// window is another global object which represent current brower opened


// in node every file is a module and variable defined inside it has scope of it only.
console.log(module)

// loading a module
const logger = require('./logger')
// node use wrapper function(module,exports,require,__filename,__dirname) to wrap logger.js module inside it completely


console.log(logger)

logger.log("hello from app.js module")

const p= require('path')
console.log(p.parse(__filename));

// for other built in module refer to nodejs.org


