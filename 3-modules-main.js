const names = require('./4-modules-variables')
const sayHi = require('./5-modules-function')
const data = require('./6-modules-alternative')

require('./7-mind-granade')

sayHi('maria')
sayHi(names.bruno)
sayHi(names.umbelino)

console.log(data)
