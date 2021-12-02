let fs = require('fs')

const data = fs.readFileSync('input.txt', 'utf-8')
const input = data.split('\n').map(i => parseInt(i))

let largerMeasurement = 0
for (let i = 0; i < input.length; i++) {

  if (i === 0 || (i + 1) > input.length)
    continue

    const curr = input[i]
    const prev = input[i-1]


  if (curr > prev)
    largerMeasurement++
}

console.log(largerMeasurement)
