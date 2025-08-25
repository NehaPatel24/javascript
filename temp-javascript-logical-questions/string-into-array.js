// Convert a String into an Array of Characters
// Example:
// Input: "hello"
// Output: ['h', 'e', 'l', 'l', 'o']

let str = "hello";
let arr = [];
for(let i = 0; i < str.length; i++){
  arr.push(str[i])
}
console.log(arr);