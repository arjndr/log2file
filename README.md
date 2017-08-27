# log2file
This is a simple module to save logs for your NodeJS application!

# What's new in 0.0.3?
1. All functions are now chainable!
   ```js
   console.log('hello').warn('I am a warning!')
   ```
2. Custom colored console logs.
    ### Usage:
    ```js
    console.custom('Custom colored message', 'magenta')
    // Outputs magenta colored message in the console
    ```
    #### Valid colors:
    - `black`
    - `red`
    - `yellow`
    - `blue`
    - `magenta`
    - `cyan`
    - `white`
    
3. New option to use! See below.

# How to use :
1. Install module using `npm install log2file`
2. Require the module
    ```js
    var logToFile = require('log2file')
    ```
3. Initialize **log2file**

    `logToFile(options)`
    - `options`Object (required)
        - `logFile`String : Name of the log file, defaults to `logfile.log`
        - `enableTime`Boolean : Sets whether the log should contain time
        - `logToConsole`Boolean : Sets whether you want to show the log on console or just save it to the file
        - `bright`Boolean : Sets whether the console output should be bright or normal.
4. That's it! Use `console.log()`, `console.warn()` and `console.error()` like you do always.

### MIT (c) Akash Rajendra
###### I was supposed to be studying for my exams, but no. I made this instead.
