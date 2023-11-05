// const solution = (str) => {
//   let newStr = str.replace(/[^0-9a-z]/gi, "")
//   return recursiveFunction(newStr)
// }

// const recursiveFunction = (str) => {
//   if (str.length <= 1) return true
//   if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) return false

//   return recursiveFunction(str.slice(1, str.length - 1))
// }

// console.log(solution("Str !: sj"))
// console.log(solution("Str !: Rts"))

function isPalindrome(s) {
  if (s.length <= 1) return true

  s = s.replace(/[^0-9a-z]/gi, "")
  console.log(s)
  if (s[0].toLowerCase() === s[s.length - 1].toLowerCase())
    return isPalindrome(s.slice(1, s.length - 1))

  return false
}

console.log(isPalindrome("a."))
// console.log(isPalindrome("Str !: Rts"))
