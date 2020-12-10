function iterSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target)
      return i
  }
  return -1
}

function recSearch(arr, target) {
  //if element is empty
  if (arr.length === 0)
    return -1
  //check last element
  if (arr[arr.length - 1] === target)
    return arr.length - 1
  arr.pop()
  return recSearch(arr, target)
}

let x = [4, 6, 5, 1, 8, 9]
console.log("Iterative search", iterSearch(x, 5))
console.log("Recursive search", recSearch(x, 5))