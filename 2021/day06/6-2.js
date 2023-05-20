const initialAges = require('fs').readFileSync(process.argv[2], 'utf-8').split(',')

// No tail call recursion in Node/V8. Boooo
function age(ages, maxDays) {
    let currentDay = 1
    while (currentDay <= maxDays) {
        const newGenerationCount = ages.filter(age => age == 0).length
        const newGeration = Array(newGenerationCount).fill(9)
        ages = ages.concat(newGeration).map(age => age == 0 ? 6 : age - 1)
        currentDay++
    }
    return ages
}

console.log(age(initialAges, 256).length)