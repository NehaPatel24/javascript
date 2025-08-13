
// 12.Problem Statement:
// Write a program that takes three integers as input and prints them in ascending order (smallest to largest), all on one line separated by spaces.

let a = 4; b = 7; c = 2;
let temp ;
if (a >  b){
  temp = a;
  a= b;
  b = temp;
} if(b > c){
    temp = b;
    b = c;
    c = temp;
} if(a > c){
    temp = a;
    a = c;
    c = temp;
}
console.log(a, b, c);