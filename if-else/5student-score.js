// 5.Problem Statement:
// Write a program that takes a student's score as an integer input (0 to 100) and prints the corresponding grade based on the following rules:
// 90 to 100 → "A"
// 80 to 89 → "B"
// 70 to 79 → "C"
// 60 to 69 → "D"
// Below 60 → "F"


let a = 52;
if (a >90 && a < 100){
    console.log("A");
} else if (a >= 80 && a < 89){
    console.log("B");
} else if (a >= 70 && a < 79){
    console.log("C");
}else if (a >= 60 && a < 69){
    console.log("D");
} else {
    console.log("F");
}