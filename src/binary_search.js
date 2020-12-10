function binarySearch(arr, target, left, right) {
    if (left <= right) {
        let midpoint = Math.floor((right + left) / 2)

        if (arr[midpoint] === target)
            return midpoint

        if (arr[midpoint] < target)
            return binarySearch(arr, target, midpoint + 1, right)
        else
            return binarySearch(arr, target, left, midpoint - 1)
    }
    return -1
}

let x = [1, 4, 5, 6, 8, 9]

console.log(binarySearch(x, 9, 0, x.length - 1))