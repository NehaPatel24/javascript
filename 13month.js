
// 13.Problem Statement:
// Write a program that takes an integer between 1 and 12 as input, representing the month number, and prints the number of days in that month (not considering leap years).
// Print "31" for months: 1, 3, 5, 7, 8, 10, 12
// Print "30" for months: 4, 6, 9, 11
// Print "28" for month: 2
// If the number is not between 1 and 12, print "Invalid month"


let month = 12;


if( month == 1 && month == 3 && month == 5 && month == 7 && month == 8 && month == 10 && month == 12){
    console.log("31");
}
else if (month == 4 && month == 6 && month == 9 && month == 11){
    console.log("30");
}
else if (month == 2){
    console.log("28");
}
else{
    console.log("Invalid month");
}