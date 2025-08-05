// 3.Problem Statement:
// Write a program that takes three integers as input and prints the largest among them. If two or more numbers are equal and also the largest, print that number once.


let a = 9; b = 8; c =7;
if (a > b && a > c){
    console.log(a);
} else if(b > a && b > c){
    console.log(b);
} else{
    console.log(c);
}