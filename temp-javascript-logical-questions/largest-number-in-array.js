// Find the Largest Number in an Array
// Example:
// Input: [4, 7, 1]
// Output: 7


// let arr = [8, 7, 1];
// let max = 0;
// for(let i = 0; i < arr.length; i++){
//    if(max < arr[i]){
//     max = arr[i];
//    }
  
// } console.log(max);


// Questions on Arrays
// Find the Largest Number in an Array
// Write a program to find the largest number in the array [1, 3, 7, 2, 5].
// Example:
// Input: [1, 3, 7, 2, 5]
// Output: 7

let arr = [1, 3, 7, 2, 5];
let max = 0;
for(let i = 0; i < arr.length; i++){
   if(max < arr[i]){
      max = arr[i];
   }
} console.log(max);