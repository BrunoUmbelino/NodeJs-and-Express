const names = require('./3-modules-variables')
const sayHi = require('./3-modules-function')
const data = require('./6-modules-alternative')

sayHi('maria')
sayHi(names.bruno)
sayHi(names.umbelino)

console.log(data)
