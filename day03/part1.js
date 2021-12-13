let fs = require('fs')
let readline = require('readline')

let main = async () => {
  const fileStream = fs.createReadStream('input.txt');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const commonBits = []

  for await (const line of rl) {
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      commonBits[i] = commonBits[i] || []
      commonBits[i].push(char)
    }
  }

  const gammas = []
  const epsilons = []

  for (const i of commonBits) {
    const zeros = i.filter(x => x === '0').length
    const ones = i.filter(x => x === '1').length

    if (zeros > ones) {
      gammas.push(0)
      epsilons.push(1)
    }
    else {
      gammas.push(1)
      epsilons.push(0)
    }
  }

  const gamma = parseInt(gammas.reduce((a, b) => a + `${b}`, ''), 2)
  const epsilon = parseInt(epsilons.reduce((a, b) => a + `${b}`, ''), 2)

  console.log(gamma * epsilon)
}

main();
