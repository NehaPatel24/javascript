// Write a program to identify duplicate elements in the array [1, 2, 3, 4, 2, 5, 3].
// Example:
// Input: [1, 2, 3, 4, 2, 5, 3]
// Output: [2, 3]

let arr = [1, 2, 3, 4, 2, 5, 3];
let count = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        if(arr[i] === arr[j]){
        count++;
        }
    }if(count > 1){
        console.log(count,arr[i]);
    }
}