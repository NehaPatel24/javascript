// 18.Problem Statement:
// Write a program that takes an integer input representing a person's age and checks two things:
// If the age is odd and greater than or equal to 18, print "Odd Adult"
// If the age is odd and less than 18, print "Odd Minor"
// If the age is even, print "Even Age"

let  age = 22;
if (age % 2 !== 0) {
    if (age >= 18){
        console.log("Odd Adult")
    }else {
        console.log("Odd Minor");
    }
} else {
    console.log("Even Age");
}

