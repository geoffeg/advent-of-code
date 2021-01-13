// light red bags contain 1 bright white bag, 2 muted yellow bags.
const fileData = require('fs').readFileSync(process.argv[2], 'ascii').split('\n').filter(n => n)
const parser = /(?:^|(\d+) )(\w+ \w+) bag/g
const bagDefs = fileData.map((line) => {
  return [...line.matchAll(parser)].map((match) => match[1] ? [match[1], match[2]] : match[2])
})

function findBags(bagDefs, target) {
  return bagDefs.flatMap((bagDef) => {
    return bagDef.slice(1,).flatMap((bagSegment) => {
      if (bagSegment[1] == target) {
        return [findBags(bagDefs, bagDef[0]), bagDef[0]].flat()
      }
    })
  }).filter(n => n)
}

const bags = findBags(bagDefs, "shiny gold")
console.log(bags.filter((e, i) => bags.indexOf(e) === i).length)
