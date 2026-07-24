console.log('Hello, world!')

const process = require('bare-process')
const ok1 = process.stdout.write('stdout\n')
const ok2 = process.stderr.write('stderr\n')

const stats = JSON.stringify({
  stdoutIsTTY: process.stdout.isTTY,
  stderrIsTTY: process.stderr.isTTY,
  stdoutFd: process.stdout.fd,
  stderrFd: process.stderr.fd,
  ok1,
  ok2,
}, null, 2)
const output = `I ran\n${stats}\n`

require('bare-fs').writeFileSync('ran.txt', output)

const tty = require('bare-tty')
const stdout = new tty.WriteStream(1)
stdout.write('Hello from tty!\n')

console.log('Bye, world!')
