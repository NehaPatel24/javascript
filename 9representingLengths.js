// 9.Problem Statement:
// Write a program that takes three positive integers as input, representing the lengths of the sides of a triangle.
// Determine the type of triangle:
// If all three sides are equal, print "Equilateral"
// If exactly two sides are equal, print "Isosceles"
// If no sides are equal, print "Scalene"
// 

let a = 5; b = 5; c = 5;
if (a === b && b === c){
    console.log("Equilateral");
} else if (a === b || b === c || a === c){
    console.log("Isosceles");
}else{
    console.log("Scalene");
}