// 4.Problem Statement:
// Write a program that takes an integer as input and checks:
// If the number is divisible by both 3 and 5, print "FizzBuzz"
// If it is divisible only by 3, print "Fizz"
// If it is divisible only by 5, print "Buzz"
// If it is divisible by neither, print the number itself


let a = 35;
if (a % 3 == 0 && a % 5 == 0){
    console.log("FizzBuzz");
} else if(a % 3 == 0){
    console.log("Fizz");
} else if(a % 5 == 0){
    console.log("Buzz");
} else{
   console.log(a);
}