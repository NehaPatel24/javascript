// 19.Problem Statement:
// Write a program that takes a single integer input and prints a label based on the following number ranges:
// If the number is less than 0, print "Negative"
// If it is from 0 to 10 (inclusive), print "Small"
// If it is from 11 to 100 (inclusive), print "Medium"
// If it is greater than 100, print "Large"

let num = 116;
if (num < 0){
    console.log("Negative");
} else if(num >= 0 && num <= 10){
    console.log("Small");
} else if(num >= 11 && num <= 100){
    console.log("Medium");
} else{
    console.log("Large");
}

