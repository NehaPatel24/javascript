// Reverse a String
// Write a program to reverse the string "hello".
// Example:
// Input: "hello"
// Output: "olleh"

// let str = "hello";
// let reverse = "";
// for(let i = str.length-1; i >= 0; i--){
// reverse += str[i]
// }
// console.log(reverse);


// let str = "hello";
// let add = [];

// for (let i = str.length - 1; i >= 0; i--) {
//   add.push(str[i]);
// }

// console.log(add.join("")); 


let str ="hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);



