// Sort an Array in Ascending Order
// Write a program to sort the array [3, 1, 4, 2, 5] in ascending order.
// Example:
// Input: [3, 1, 4, 2, 5]
// Output: [1, 2, 3, 4, 5]
// Merge Two Arrays


////// rong output ///////
let arr = [3, 1, 4, 2, 5];
let smoler = [];
let sorted = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        sorted = arr[i];
        smoler.push(sorted);
      }
}console.log(smoler);
}
console.log(smoler);
