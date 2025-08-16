// 4.Problem Statement:
// Write a program that takes a positive integer n as input and prints all multiples of 3 from 1 to n, separated by spaces.

// for..loop

// let n = 10;
// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }


// while..loop

// let n = 15;
// i = 1;
// while(i <= n){
//     if(i % 3 == 0){
//         console.log(i);
//     }
//     i++;
// }


// do-while..loop

let n = 20;
i = 1;
do {
    if(i % 3 == 0){
        console.log(i);
    }
    i++;
} while (i <= n);