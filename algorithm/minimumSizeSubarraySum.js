const minimumSizeSubarraySum = (target, nums) => {
  let subArray = []
  let minLength = Infinity
  let sum = 0
  for (const item of nums) {
    console.log("item: ", item)
    sum += item
    subArray.push(item)
    while (sum >= target) {
      minLength = Math.min(subArray.length, minLength)
      sum -= subArray[0]
      subArray = subArray.slice(1)
    }
  }
  return minLength === Infinity ? 0 : minLength
}

console.log(minimumSizeSubarraySum(7, [1, 2, 3, 4]))
console.log(minimumSizeSubarraySum(7, [3, 4, 2, 1]))
console.log(minimumSizeSubarraySum(15, [1, 2, 3, 4, 5]))
console.log(minimumSizeSubarraySum(4, [1, 4, 6]))
