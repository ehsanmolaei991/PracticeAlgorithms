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

  const sliceGoal = goal[goal.length - 1];
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

  if (string[0].toLowerCase() === string[string.length - 1].toLowerCase())
    return isReverseableRecursive(string.slice(1, string.length - 1));

  return false;
};

// console.log(isReverseableRecursive("oeelo"));
// console.log(isReverseableRecursive("kayAk"));

// isReverseableTwoPoint
const isReverseableTwoPointer = (string: string): boolean => {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (
      string[i].toLowerCase() !== string[string.length - (i + 1)].toLowerCase()
    )
      return false;
  }

  return true;
};

// console.log(isReverseableTwoPointer("Hello"));
// console.log(isReverseableTwoPointer("kayAk"));

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f", "h"],
  e: [],
  f: [],
  h: ["z"],
  z: [],
};

/*
             a
            / \
          b    c
         /      \
        d        e
      /   \
     f      h
             \
              z
*/

const DFS = (graph: Record<string, string[]>, node: string) => {
  const stack = [node];

  while (!!stack.length) {
    const current = stack.pop();
    console.log(current);
    if (!!current) {
      for (const item of graph[current]) {
        stack.push(item);
      }
    }
  }
};

// DFS(graph, "a");

const BFS = (graph: Record<string, string[]>, node: string) => {
  const queue = [node];

  while (!!queue.length) {
    const current = queue.shift();
    console.log(current);
    if (!!current) {
      for (const item of graph[current]) {
        queue.push(item);
      }
    }
  }
};

// BFS(graph, "a");

const DFSRecursive = (graph: Record<string, string[]>, node: string) => {
  console.log(node);

  for (const item of graph[node]) {
    DFSRecursive(graph, item);
  }
};

// DFSRecursive(graph, "a");


// class LinkedList<T> {
//   private val
//   private next

//   constructor(val: T){
//     this.val = val
//   }

// }