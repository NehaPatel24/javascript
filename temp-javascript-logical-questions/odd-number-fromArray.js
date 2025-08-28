// Filter Odd Numbers from an Array
// Write a program to filter out all odd numbers from the array [1, 2, 3, 4, 5].
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 3, 5]

let arr = [1, 2, 3, 4, 5];
let odd = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        odd.push(arr[i]);
    }
}console.log(odd);