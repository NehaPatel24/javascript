// 6.Problem Statement:
// Write a program that takes a year as input and checks if it is a leap year.
// A year is a leap year if:
// It is divisible by 4, and
// Not divisible by 100, unless it is also divisible by 400.
// Print "Leap Year" if it is a leap year, otherwise print "Not a Leap Year".


let year = 2028;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
