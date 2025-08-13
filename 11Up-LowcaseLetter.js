// 11.Problem Statement:
// Write a program that takes a single character as input and checks whether it is an uppercase letter, a lowercase letter, or not a letter at all.
// If the character is between 'A' and 'Z', print "Uppercase"
// If the character is between 'a' and 'z', print "Lowercase"
// Otherwise, print "Not a letter"

let letter = "a";
if (letter >= "A" && letter <= "Z"){
    console.log("Uppercase");
} else if(letter >= "a" && letter <= "z"){
    console.log("Lowercase");
} else{
    console.log("Not A letter");
}
