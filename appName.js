const names = require('./modulename')
const {sayHi, agent} = require('./nameutil')
console.log(names)
const data = require('./altWay')

require('./mindGrenade')

console.log(data);
sayHi("Susan");
sayHi(names.john);
agent(names.secret);
sayHi(names.peter);

