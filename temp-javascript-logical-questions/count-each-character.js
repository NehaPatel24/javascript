// Find the Frequency of Each Character in a String
// Write a program to count the occurrence of each character in a string.
// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


let str = "hello";
let count = 0;
let num = str.split("");
for(let i = 0; i < num.length; i++){
    for(let j = 0; j < i; j++){
    if(num[i] === num[j]){
        count++;
    }else{
        count = 1;
    }

}if(count >= 1){
    console.log(count)
}
}