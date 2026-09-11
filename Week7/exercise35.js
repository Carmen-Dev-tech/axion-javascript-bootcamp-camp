// Exercise 35: Anagrams

let word1 = "listen";
let word2= "silent";

let sortedWord1 = 
word1.split("").sort().join("");
let sortedWord2 =
word2.split("").sort().join("");

console.log(sortedWord1 ===
sortedWord2);
