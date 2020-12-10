function findRotationPoint(surnames) {
    let left = 0
    let right = surnames.length - 1

    while (left < right) {
        let midpoint = Math.floor((left + right) / 2)

        if (surnames[midpoint] > surnames[0])
            left = midpoint
        else
            right = midpoint

        if (left + 1 == right)
            return right
    }
}

const surnames = [
    'liu',
    'mcdowell',
    'nixon',
    'sparks',
    'zhang',
    'ahmed',
    'brandt',
    'davenport',
    'farley',
    'glover',
    'kennedy',
]

console.log(findRotationPoint(surnames))