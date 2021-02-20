// light red bags contain 1 bright white bag, 2 muted yellow bags.
const fileData = require('fs').readFileSync(process.argv[2], 'ascii').split('\n').filter(n => n)
const parser = /(?:^|(\d+) )(\w+ \w+) bag/g
const bagDefs = Object.assign(...fileData.map((line) => {
  const matches = [...line.matchAll(parser)]
  const obj = {}
  obj[matches[0][2]] = matches.slice(1,).map((match) => {return { "bag": match[2], "count" : parseInt(match[1])}})
  return obj
}))
console.dir(bagDefs, { depth: 10 })

function findBags(bagDefs, target) {
  console.log(target)
  const bags = bagDefs[target]
  if (target in bagDefs) {
    return bagDefs[target].forEach((bag) => {
      console.log(bag.count)
      return bag.count
    })
  } else {
    return 0;
  }
}
console.dir(findBags(bagDefs, "shiny gold"), { depth: 10 })

//const bags = findBags(bagDefs, "shiny gold")
//console.log(bags.filter((e, i) => bags.indexOf(e) === i).length)
