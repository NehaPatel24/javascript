// 15.Problem Statement:
// Write a program that takes an integer as input and prints a message based on both its sign and whether it's even or odd:
// If it's a positive even number, print "Positive Even"
// If it's a positive odd number, print "Positive Odd"
// If it's a negative even number, print "Negative Even"
// If it's a negative odd number, print "Negative Odd"
// If it's zero, print "Zero"

let num = 0;
if (num > 0 ){
    if (num % 2 === 0){
        console.log("Positive Even");
    }else{
        console.log("Positive Odd");
    }
} else if(num < 0){
    if (num % 2 === 0){
        console.log("Negative Even");
    } else{
        console.log("Negative Odd");
    }
}else {
    console.log("Zero");
}
