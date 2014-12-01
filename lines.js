var through = require('through')
var split   = require('split')

var lcount = 0
var tr     = through(function(buf){
    var line = buf.toString()
    this.queue(lcount % 2 === 0
	       ? line.toLowerCase() + '\n'
	       : line.toUpperCase() + '\n'
    )
    lcount++
})

process.stdin
    .pipe(split())
    .pipe(tr)
    .Pipe(process.stdout)



