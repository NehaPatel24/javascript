// Find the Largest Number in an Array
// Example:
// Input: [4, 7, 1]
// Output: 7


let arr = [8, 7, 1];
let max = 0;
for(let i = 0; i < arr.length; i++){
   if(max < arr[i]){
    max = arr[i];
   }
  
} console.log(max);