const min = (arr) => {
  let minElem
  if (arr === undefined || arr.length === 0) return 0
  else {
    minElem = arr[0]
    arr.forEach(element => {
      if (minElem > element) minElem = element
    });
  }
  return minElem
}

const max = (arr) => {
  let maxElem
  if (arr === undefined || arr.length === 0) return 0
  else {
    maxElem = arr[0]
    arr.forEach(element => {
      if (maxElem < element) maxElem = element
    });
  }
  return maxElem
}

const avg = (arr) => {
  let sum = 0
  if (arr === undefined || arr.length === 0) return 0
  else {
    arr.forEach(element => sum += element)
  }
  return sum / (arr.length)
}

module.exports = min
module.exports = max
module.exports = avg
