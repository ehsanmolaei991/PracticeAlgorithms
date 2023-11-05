const minimumSizeSubarraySum = (target, nums) => {
  let subArray = []
  let minLength = Infinity
  let sum = 0
  for (const item of nums) {
    sum += item
    subArray.push(item)
    // console.log(subArray)
    while (sum >= target) {
      console.log(subArray)
      minLength = Math.min(subArray.length, minLength)
      subArray = subArray.slice(1)
      sum -= subArray[0]
    }
  }
  return minLength
}

console.log(minimumSizeSubarraySum(7, [2, 1, 3, 1, 2, 2, 3]))
