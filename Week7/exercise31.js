// Exercise 31: Reverse a String

let word = "Hello";

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log(reversed);