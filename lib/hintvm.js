var vm = require('vm')
   ,fs = require('fs');

var context = vm.createContext();
vm.runInContext(fs.readFileSync(__dirname +'/../modules/jshint/jshint.js'), context);

exports = module.exports = context.JSHINT;
