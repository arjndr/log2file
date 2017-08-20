# log-to-file
This is a simple module to save logs for your NodeJS application!

# How to use :
1. Require the module
    ```js
    var logToFile = require('./logtofile.js')
    ```
2. Initialize **log-to-file**
    `logToFile(options)`
    - `options`Object (required)
        - `logFile`String : Name of the log file, defaults to `logfile.log`
        - `enableTime`Boolean : Sets whether the log should contain time
        - `logToConsole`Boolean : Sets whether you want to show the log on console or just save it to the file
3. That's it! Use `console.log()`, `console.warn()` and `console.error()` like you do always.

### MIT (c) Akash Rajendra
###### I was supposed to be studying for my exams, but no. I made this instead.
