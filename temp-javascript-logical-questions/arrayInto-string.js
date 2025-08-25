// Example:
// Input: ['h', 'e', 'l', 'l', 'o']
// Output: "hello"


// let arr =  ['h', 'e', 'l', 'l', 'o'];
// let str = arr.join("");
// console.log(str);


let arr = ['h', 'e', 'l', 'l', 'o'];
let str = "";
for (let i = 0; i < arr.length; i++) {
    str += arr[i];   
}
console.log(str);

