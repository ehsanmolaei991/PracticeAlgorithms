// isSubsequenceTwoPointer
const isSubsequenceTwoPointer = (string: string, goal: string) => {
  let counter = 0;

  string.split("").forEach((char) => char === goal[counter] && counter++);

  return counter === goal.length;
};

// console.log(isSubsequenceTwoPointer("ahgdc", "abc"));
// console.log(isSubsequenceTwoPointer("ahbgdclsdkgfslkdjg", "abc"));

// isSubsequenceRecursive
const isSubsequenceRecursive = (string: string, goal: string): boolean => {
  if (!goal.length) return true;
  if (!string.length) return false;

  const sliceGoal = goal.slice(goal.length - 1, goal.length);
  const remainStr = string.slice(0, string.length - 1);

  if (string.search(sliceGoal) !== -1)
    return isSubsequenceRecursive(remainStr, goal.slice(0, goal.length - 1));

  return isSubsequenceRecursive(remainStr, goal);
};

// console.log(isSubsequenceRecursive("ahgdc", "abc"));
// console.log(isSubsequenceRecursive("ahbgdclsdkgfslkdjg", "abc"));

// reverseString
const reverseString = (string: string): string => {
  if (!string.length) return "";

  return (
    string[string.length - 1] +
    reverseString(string.slice(0, string.length - 1))
  );
};

// console.log(reverseString("Hello"));

// isReverseableRecursive
const isReverseableRecursive = (string: string): boolean => {
  if (string.length === 0 || string.length === 1) return true;

  if (string[0] === string[string.length - 1]) {
    isReverseableRecursive(string.slice(1, string.length - 1));
    return true;
  }

  return false;
};

// console.log(isReverseableRecursive("Hello"));
// console.log(isReverseableRecursive("kayak"));

// isReverseableTwoPoint
const isReverseableTwoPointer = (string: string): boolean => {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - (i + 1)]) return false;
  }

  return true;
};

// console.log(isReverseableTwoPointer("Hello"));
// console.log(isReverseableTwoPointer("kayak"));
