const initialAges = require('fs').readFileSync(process.argv[2], 'utf-8').split(',')

function age(ages, maxDays, currentDay) {
    const newGenerationCount = ages.filter(age => age == 0).length
    const newGeration = Array(newGenerationCount).fill(9)
    const newAges = ages.concat(newGeration).map(age => age == 0 ? 6 : age - 1)
    if (maxDays == currentDay) {
        return newAges
    }   
    return age(newAges, maxDays, currentDay + 1)
}

console.log(age(initialAges, 80, 1).length)