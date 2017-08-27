module.exports = function(options){
	var fs = require('fs')
	var LOG_FILE = 'logfile.log'
	var TIME_NOW = new Date()
	var BRORDI = ''

	if (options == undefined) {
		process.stdout.write('\x1b[1m\033[31mNo options were found! Please feed me some options, I\'m hungry\x1B[0m\r\n')
		return 1
	}

	if (options.logFile.length > 0) {
		LOG_FILE = options.logFile
	}

	if (options.bright) {
		BRORDI = '\x1b[1m'
	} else {
		BRORDI = ''
	}

	console.log = console.info = function(message){
		WriteLog(message, 'normal')
		return this
	}

	console.warn = function(message){
		WriteLog(message, 'warn')
		return this
	}

	console.error = function(message){
		WriteLog(message, 'error')
		return this
	}

	console.clear = function(){
		fs.writeFileSync(LOG_FILE, '')
		return this
	}

	console.custom = function(message, color){
		if (color == undefined) {
			process.stdout.write('\x1b[37mNo color is specified! color is required!\x1B[0m\r\n')
		}
		WriteLog(message, 'custom', color)
		return this
	}

	function WriteLog(message, type, color){
		if (options.enableTime) {
			message = '[' + TIME_NOW.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute:'numeric', second: 'numeric', hour12: true }) + '] ' + message
		}
		
		switch (type) {
			case 'warn':
			case 'warning':
				if (options.logToConsole) {
					process.stdout.write('\x1b[33m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(LOG_FILE, '[WARN]\t' + message + '\r\n')
				break;
			case 'error':
				if (options.logToConsole) {
					process.stdout.write('\033[31m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(LOG_FILE, '[ERR]\t' + message + '\r\n')
				break;
			case 'info':
			case 'normal':
			case 'default':
				if (options.logToConsole) {
					process.stdout.write('\x1b[37m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
				}
				fs.appendFileSync(LOG_FILE, '[INFO]\t' + message + '\r\n')
				break;
			case 'custom':
				switch (color) {
					case 'black':
						process.stdout.write('\x1b[30m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'red':
						process.stdout.write('\033[31m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'yellow':
						process.stdout.write('\x1b[33m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'blue':
						process.stdout.write('\x1b[34m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'magenta':
						process.stdout.write('\x1b[35m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'cyan':
						process.stdout.write('\x1b[36m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					case 'white':
						process.stdout.write('\x1b[37m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
						break;
					default:
						process.stdout.write('\x1b[37m' + BRORDI.toString() + message.toString()  + '\x1B[0m\r\n')
				}
				break;
			default:
			    if (options.logToConsole) {
					process.stdout.write(message.toString()  + '\r\n')
				}
				fs.appendFileSync(LOG_FILE, message + '\r\n')
		}
	}
}
