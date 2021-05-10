const path = require('path')

console.log('sep-', path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log('join-',filePath)

const base = path.basename(filePath)

console.log('basename-',base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log('resolve-',absolute)