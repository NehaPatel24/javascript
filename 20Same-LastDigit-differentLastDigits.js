// 20.Problem Statement:
// Write a program that takes two positive integers as input and checks whether they have the same last digit.
// If the last digits are the same, print "Same Last Digit"
// Otherwise, print "Different Last Digits"

let a = 26; b = 76;
 let x = a % 10;
 let y = b % 10;
if (x === y){
  console.log("Same Last Digit")
} else{
    console.log("Different Last Digits");
}


