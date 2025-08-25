// Print Even Numbers from an Array
// Example: Input: [1, 2, 3, 4, 5] → Output: [2, 4]


let arr = [1, 2, 3, 4, 5];
let even = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
        }
}console.log(even);