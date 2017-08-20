var fs = require('fs')
var logF = 'logfile.log'
var date = new Date()
module.exports = function(options){
	if (options == undefined) {
		process.stdout.write('\033[31m\x1b[1mNo options were found! Please feed me some options, I\'m hungry\x1B[0m\r\n')
		return 0
	}
	
	((typeof(options.logFile) == String) ? logF = options.logFile : logF = logF)

	console.log = console.info = function(message){
		WriteLog(message, 'normal')
	}

	console.warn = function(message){
		WriteLog(message, 'warn')
	}

	console.error = function(message){
		WriteLog(message, 'error')
	}

	console.clear = function(){
		fs.writeFileSync(logF, '')
	}

	function WriteLog(message, type){
		((options.enableTime) ? message = '[' + date.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute:'numeric', second: 'numeric', hour12: true }) + '] ' + message : message = message)
		switch (type) {
			case 'warn':
			case 'warning':
				if (options.logToConsole) {
					process.stdout.write('\x1b[33m\x1b[1m' + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(logF, '[WARN]\t' + message + '\r\n')
				break;
			case 'error':
				if (options.logToConsole) {
					process.stdout.write('\033[31m\x1b[1m' + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(logF, '[ERR]\t' + message + '\r\n')
				break;
			case 'info':
			case 'normal':
			case 'default':
				if (options.logToConsole) {
					process.stdout.write('\x1b[37m\x1b[1m' + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(logF, '[INFO]\t' + message + '\r\n')
				break;
			default:
			    if (options.logToConsole) {
					process.stdout.write(message.toString()  + '\r\n')
				}
				fs.appendFileSync(logF, message + '\r\n')
		}
	}
}
