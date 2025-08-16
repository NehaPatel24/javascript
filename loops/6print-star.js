// 6.Problem Statement:
// Write a program that takes a positive integer n as input and prints n asterisks (*) on the same line, separated by spaces.

// for..loop

// let n = 5;
// let result = "";

// for (let i = 1; i <= n; i++) {
//     result += "*";
//     if (i < n) result += " ";
// }

// console.log(result);

let n = 4;
let i = 2;
let isPrime = true;
while(i < n){
    if(n % i === 0){
        isPrime = false;
        break;
    }
    i++;
}
if(isPrime){
    console.log("Prime number")
}else{
    console.log("Not a prime number")
}
//let i = 1; 
//let count = 0;
// while(i <= n){
//     if(n % i == 0){
//     count++;
//     }
//     i++;
// }
// if(count == 2){
//     console.log("Prime");
// }else{
//     console.log("No Prime");
// }
