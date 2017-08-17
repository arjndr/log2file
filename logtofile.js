'use strict'
var fs = require('fs')
module.exports = function(){
	console.log = console.warn = console.error = console.info = function(msg){
		fs.appendFileSync('log.txt', msg)
	}
	console.clear = function(){
		fs.writeFileSync('log.txt', '')
	}
}