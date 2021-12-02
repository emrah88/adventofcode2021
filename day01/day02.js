let fs = require('fs')

const data = fs.readFileSync('input.txt', 'utf-8')
const input = data.split('\n').map(i => parseInt(i))

const chunks = []

for (let i = 0; i < input.length; i++) {
  chunks.push(input.slice(i, i + 3))
}

let largerMeasurement = 0
for (let i = 0; i < chunks.length; i++) {

  if (i === 0 || (i + 1) > chunks.length)
    continue

    const curr = chunks[i].reduce((acc, curr) => acc + curr, 0)
    const prev = chunks[i-1].reduce((acc, curr) => acc + curr, 0)


  if (curr > prev)
    largerMeasurement++
}

console.log(largerMeasurement)
