// 1.Problem Statement:
// Write a program that takes an integer input representing a person's age and prints the corresponding age group based on the following conditions:
// If the age is less than 13, print "Child"
// If the age is 13 or more but less than 20, print "Teen"
// If the age is 20 or more but less than 60, print "Adult"
// If the age is 60 or more, print "Senior"


let age = 12;

if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age < 20) {
    console.log("Teen");
} else if (age >= 20 && age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
