// 17.Problem Statement:
// Write a program that takes a positive two-digit integer as input and checks whether its tens digit is even.
// If the tens digit is even, print "Even Tens"
//Otherwise, print "Odd Tens"


let num = 41;
if (num >= 10 && num < 100){
    numTens = Math.floor(num / 10);
    if(num % 2 === 0){
        console.log("Even Tens")
    } else{
        console.log("Odd Tens");
    }
}
