// Find How Many Times a Character Appears in a String
// Example:
// Input: "apple", Find: 'p'
// Output: 2

let str = "Apple";
for(let i = 0; i < str.length; i++){
let count = 0;
for(let j = 0; j < str.length; j++){
    if(str[i] === str[j]){
        count++;
    }
  }if (count > 1){
  console.log(str[i],count);
}
}