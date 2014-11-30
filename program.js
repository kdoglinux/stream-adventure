var through = require('through')

var tr = through(function(buf){
    buf = buf.toString()
    buf = buf.toUpperCase()
    this.queue(buf)
})

var input = process.stdin

input.pipe(tr).pipe(process.stdout)




