// Exercise 32: Count Vowels 

let word = "javascript";

let count = 0;

for (let i = 0; i < word.length; i++) 
{
    if ("aeiou".includes(word[i])) {
        count++;
    }
}

console.log(count);