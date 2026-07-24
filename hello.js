console.log('Hello, world!')

const process = require('bare-process')
process.stdout.write('stdout\n')
process.stderr.write('stderr\n')

const stats = JSON.stringify({
    stdoutIsTTY: process.stdout.isTTY,
    stderrIsTTY: process.stderr.isTTY,
    stdoutFd: process.stdout.fd,
    stderrFd: process.stderr.fd,
  }, null, 2)
const output = `I ran\n${stats}\n`

require('bare-fs').writeFileSync('ran.txt', output)

console.log('Bye, world!')
