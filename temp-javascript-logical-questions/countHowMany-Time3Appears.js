// Write a program to count how many times 3 appears in the array [1, 3, 3, 5, 3, 7].
// Example:
// Input: [1, 3, 3, 5, 3, 7]
// Output: 3
// Find Duplicates in an Array

let arr = [1, 3, 3, 5, 3, 7];
let count = 0;
for(let  i =0; i < arr.length; i++){
    if (arr[i] === 3){
        count++;
    }
}console.log(count);