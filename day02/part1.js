let fs = require('fs')
let readline = require('readline')

let main = async () => {
  const fileStream = fs.createReadStream('input.txt');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let horizontalPosition = 0
  let depth = 0

  let regex = /(?<type>forward|down|up) (?<amount>\d+)/

  for await (const line of rl) {
    let match = regex.exec(line)

    console.log({... match.groups })

    switch (match.groups.type) {
      case 'forward':
        horizontalPosition = horizontalPosition + parseInt(match.groups.amount)
        break;
      case 'up':
        depth = depth - parseInt(match.groups.amount)
        break;
      case 'down':
        depth = depth + parseInt(match.groups.amount)
        break;
    }
  }

  console.log(horizontalPosition * depth)
}

main();
