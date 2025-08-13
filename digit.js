// 8.Problem Statement:
// Write a program that takes a single character as input and checks whether it is a digit (0-9).
// If the character is a digit, print "Digit".
// If not, print "Not a Digit".

const prompt = require("prompt-sync")();

let char = prompt("Enter a character: ");

if (char.length === 1 && char >= '0' && char <= '9') {
    console.log("Digit");
} else {
    console.log("Not a Digit");
}
