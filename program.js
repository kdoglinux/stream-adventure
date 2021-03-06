var through = require('through')
var split   = require('split')

var tr     = through(write)
var lcount = 0
function write(buf){
    var line = buf.toString()
    this.queue(lcount % 2 === 0
	       ? line.toLowerCase() + '\n'
	       : line.toUpperCase() + '\n'
    )
    lcount++
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)



