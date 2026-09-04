// Exercise 34: Capitalize 

let sentence = "hello my darling";

let capitalized = sentence
    .split(" ")
    .map(word =>
word.charAt(0).toUpperCase() +
word.slice(1))
    .join(" ");

    console.log(capitalized);
    